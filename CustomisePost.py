from typing import Union
import json
import pandas as pd 
import requests
import urllib
import os 
from fake_useragent import UserAgent
from requests.exceptions import HTTPError
import random 
import os
import generate
from nltk import tokenize
from operator import itemgetter
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
import time
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
import random
import json
from flask import Flask, request,Response, send_from_directory
import flask
from flask_cors import CORS
from werkzeug.utils import secure_filename





app = Flask(__name__)

upload_folder = os.path.join('static', 'uploads')

app.config['UPLOAD'] = upload_folder

cors = CORS(app,resources={r"/getGeneratedPost": {"origins": "https://b594-101-53-254-207.ngrok-free.app/"}})
# @app.before_request
# def basic_authentication():
#     if request.method.lower() == 'options':
#         return Response()
# cors = CORS(app, resources={r"/foo": {"origins": "http://localhost:port"}})
@app.route("/getGeneratedPost", methods=['GET'])

def api():
    args = request.args
    genre = args.get("genre")
    print(args,"genre")
    per_page = 10
    page = 1
    image_folder_path = os.getcwd() + "/images"
    if not os.path.isdir(image_folder_path):
        os.mkdir(image_folder_path)
    parameter = {"query": genre, "per_page": per_page, "page": page}
    query = urllib.parse.urlencode(parameter)
    url = f"https://unsplash.com/napi/search/photos?{query}"

    def call_request(url) -> Union[HTTPError, dict]:
        user_agent = UserAgent()
        headers = headers={'User-Agent': str(user_agent)}
        response = requests.get(url, headers=headers)
        try:
            response.raise_for_status()
        except requests.exceptions.HTTPError as e:
            return e

        return response.json()

    response = call_request(url)
    image_list = []
    if len(response['results']) > 0:
        for i in range(len(response['results'])):
            filename = response['results'][i]['urls']['raw'].split('/')[-1].split('?')[0]+".jpg"
            folder_path = os.path.join(image_folder_path, genre)
            if not os.path.isdir(folder_path):
                os.mkdir(folder_path)
            filepath = os.path.join(folder_path, filename)
            r = requests.get(response['results'][i]['urls']['raw'], allow_redirects=True)
            open(filepath.replace("\\", "/"), 'wb').write(r.content)
            temp = {"Genre": genre, "Image Name": filename, "Image URL": response['results'][i]['urls']['raw']}
            image_list.append(temp)
        df = pd.DataFrame(image_list)
        print(df)
    else:
        print("No results found for the given query!")


    images_path = f"{image_folder_path}/{genre}"
    images = os.listdir(images_path)
    for i in range(len(images)):
        if len(images) > 0:
            random_image = random.choice(images)
            random_image_path = os.path.join(images_path, random_image)
            print(f"Random image selected: {random_image}")
            print(random_image_path)
        else:
            print("No images found in the downloaded folder!")

    # Image Captioning 

    #-------- taking the description from the model---------- 


    def generate_caption():
        filePath = random_image_path
        # fileNameArr = filePath.split("/")
        # file_name = fileNameArr[len(fileNameArr)-1]
        # #file_name = filename
        caption = generate.runModel(filePath)
        return caption
        

    sent=generate_caption()

    #----------taking the sentence and extract the keywords --------- 


    stop_words = set(stopwords.words('english'))

    total_sentences = tokenize.sent_tokenize(sent)
    total_sent_len = len(total_sentences)
    #print(total_sent_len)

    tf_score = {}
    total_words = sent.split()
    total_word_length = len(total_words)

    for each_word in total_words:
        each_word = each_word.replace('.','')
        if each_word not in stop_words:
            if each_word in tf_score:
                tf_score[each_word] += 1
            else:
                tf_score[each_word] = 1

    # Dividing by total_word_length for each dictionary element
    tf_score.update((x, y/int(total_word_length)) for x, y in tf_score.items())
    #print(tf_score)


    def check_sent(word, sentences): 
        final = [all([w in x for w in word]) for x in sentences] 
        sent_len = [sentences[i] for i in range(0, len(final)) if final[i]]
        return int(len(sent_len))

    idf_score = {}
    for each_word in total_words:
        each_word = each_word.replace('.','')
        if each_word not in stop_words:
            if each_word in idf_score:
                idf_score[each_word] = check_sent(each_word, total_sentences)
            else:
                idf_score[each_word] = 1


    tf_idf_score = {key: tf_score[key] * idf_score.get(key, 0) for key in tf_score.keys()}

    def get_top_n(dict_elem, n):
        result = dict(sorted(dict_elem.items(), key = itemgetter(1), reverse = True)[:n]) 
        return list(result.keys())

    top_words = get_top_n(tf_idf_score, 5)
    print(top_words,"top")


    #-------- here it is taking the random keyword from the list of keywords and scrap the data .

    def scrape_captions():
        random_word = random.choice(top_words)
        print(random_word)

        # Configure Chrome to run in headless mode
        options = Options()
        options.headless = True
        driver = webdriver.Chrome(options=options)

        # Load the search page
        driver.get("https://captionplus.app/caption-categories")
        time.sleep(1)
        # Find the search input field and enter the keyword
        search_input = driver.find_element(By.XPATH, '//*[@id="__layout"]/div/div/div/div/div/div/div[1]/div/div/form/div/input')
        search_input.send_keys(random_word)
    

        # Click on the search button
        search_button = driver.find_element(By.XPATH, '//*[@id="__layout"]/div/div/div/div/div/div/div[1]/div/div/form/div/a')
        search_button.click()
        time.sleep(1)
    # Extract the captions
        captions = []
        for i in range(1, 10):
            try:
                div_element = driver.find_element(By.XPATH, f'(//p[@class="description mb-0 font-weight-400"])[{i}]')
                div_text = div_element.text.strip()
                captions.append(div_text)
            except:
                break
        driver.quit()
        
        # If there are less than 5 captions, store them and return early
        if len(captions) < 5:
            with open('captions.json', 'r') as f:
                data = json.load(f)

            # Add the new data to the existing data
            data[random_word] = captions

            # Write the updated data back to the JSON file
            with open('captions.json', 'w') as f:
                json.dump(data, f, indent=4, separators=(',', ': '))
            return captions

        # Load existing data from the JSON file
        with open('captions.json', 'r') as f:
            data = json.load(f)

        # Add the new data to the existing data
        data[random_word] = captions

        # Write the updated data back to the JSON file
        with open('captions.json', 'w') as f:
            json.dump(data, f, indent=4, separators=(',', ': '))
        return captions

    caption =  scrape_captions()
    res = []
    response = flask.jsonify({'some': 'data'})
    response.headers.add('Access-Control-Allow-Origin', '*')
    for i in (image_list):        
        res.append({"genre": genre,"caption":caption[random.randint(0,len(caption)-1)],"image":i["Image URL"]})

    response = flask.jsonify({'data': res})
    response.headers.add('Access-Control-Allow-Origin', '*')

    return response

@app.route('/uploadImage', methods=['GET', 'POST'])
def file_upload():
    if request.method == 'POST':
        f = request.files['file']
        filename = secure_filename(f.filename)
        f.save(os.path.join(app.config['UPLOAD'], filename))
        return send_from_directory(app.config['UPLOAD'], filename)
    # return render_template('render.html')


if __name__ == "__main__":
    app.run(debug=True)