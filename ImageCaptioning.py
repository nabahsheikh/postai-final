# Image Captioning 

#-------- taking the description from the model---------- 

from tkinter import filedialog
import os
import generate
import nltk
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


filename = str()
nltk.download('stopwords')
nltk.download('punkt')
def choose_file():
    global filename
    filename = filedialog.askopenfilename(initialdir=os.getcwd(), title="Select image file", filetypes=(("JPG File", "*.jpg"), ("PNG file", "*.png"), ("All files", "*.")))

choose_file()

def generate_caption():
    filePath = filename
    fileNameArr = filePath.split("/")
    file_name = fileNameArr[len(fileNameArr)-1]
    file_name = filename
    print(file_name)
    caption = generate.runModel(file_name)
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
print(top_words)


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
    for i in range(1, 6):
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
        return

    # Load existing data from the JSON file
    with open('captions.json', 'r') as f:
        data = json.load(f)

    # Add the new data to the existing data
    data[random_word] = captions

    # Write the updated data back to the JSON file
    with open('captions.json', 'w') as f:
         json.dump(data, f, indent=4, separators=(',', ': '))


scrape_captions()

