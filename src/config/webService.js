import { useSelector } from "react-redux";
import qs from "qs";
import ApiHandler from "../services/ApiHandler";
import { getCurrentAccessToken, getCurrentUserId } from "../services/utils";
import DataHandler from "../services/DataHandler";
import { get } from "lodash";

export const API_TIMEOUT = 30000;
export const ABORT_REQUEST_MESSAGE = "Network failed. Aborted request.";

export const BASE_URL = process.env.REACT_APP_BACKEND_DEV_URL;
export const FB_BASE_URL = "https://graph.facebook.com/";
export const FLASK_BASE_URL = "https://8a0d-101-53-254-207.ngrok-free.app/";

// export const FLASK_BASE_URL = "https://postai.pythonanywhere.com/";
// export const BASE_URL = process.env.REACT_APP_BACKEND_PROD_URL;

export const ERROR_SOMETHING_WENT_WRONG =
  "Something went wrong, Please try again later";
export const ERROR_API_NOT_FOUND = "Api not found, Please try again later";

export const ERROR_NETWORK_NOT_AVAILABLE =
  "Please connect to the working Internet";

export const ERROR_ACCOUNT_BLOCKED =
  "Either your account is blocked or deleted";

export const ERROR_TOKEN_EXPIRE = "Session Expired, Please login again!";

export const REQUEST_TYPE = {
  GET: "get",
  POST: "post",
  DELETE: "delete",
  PUT: "put",
};

// let id = DataHandler.getStore()?.getState().user.data.id;
// const id = getCurrentUserId();

//UPLOAD IMAGE
export const UPLOAD_IMAGE = {
  route: "/uploadImage",
  access_token_required: true,
  type: REQUEST_TYPE.POST,
};

// DASHBOARD STATES

export const CONTACT_US = {
  route: "/conact-forms/fill",
  access_token_required: true,
  type: REQUEST_TYPE.POST,
};

export const GET_POSTS = {
  route: "/feed",
  access_token_required: true,
  type: REQUEST_TYPE.GET,
};

export const GET_SCHEDULED_POSTS = {
  route: "/scheduled_posts",
  access_token_required: true,
  type: REQUEST_TYPE.GET,
};
//POSTS
export const GET_GENERATED_POSTS = {
  route: "getGeneratedPost",
  access_token_required: false,
  type: REQUEST_TYPE.POST,
};

export const SAVE_POSTS = {
  route: "savePost",
  access_token_required: false,
  type: REQUEST_TYPE.POST,
};

//PAGES
export const GET_PAGES = {
  route: "accounts",
  access_token_required: true,
  type: REQUEST_TYPE.GET,
};

//PAGES
export const GET_CAPTION = {
  route: "scrape_captions",
  access_token_required: true,
  type: REQUEST_TYPE.POST,
};

export const CREATE_POST = {
  route: "photos",
  access_token_required: true,
  type: REQUEST_TYPE.POST,
};

//USER
export const GET_LONG_TIME_ACCESS_TOKEN = {
  route: "oauth/access_token",
  access_token_required: false,
  type: REQUEST_TYPE.GET,
};
// ALL SUBSCRIPTIONS

export const GET_SUBSCRIPTIONS = {
  route: "/api/v1/reports/stats",
  access_token_required: false,
  type: REQUEST_TYPE.GET,
};

export const callRequest = async (
  url,
  data,
  parameter,
  query,
  header = {},
  baseURL = FB_BASE_URL
) => {
  let _header = header;
  if (url.access_token_required) {
    const _access_token = getCurrentAccessToken();
    console.log("accc", _access_token);
    if (_access_token) {
      _header = {
        ..._header,
        ...{
          Authorization: `Bearer ${_access_token}`,
        },
      };
    }
  }

  let _url =
    parameter && parameter !== null ? `${url.route}/${parameter}` : url.route;
  if (query && query !== null) {
    _url = `${_url}?${query instanceof Object ? qs.stringify(query) : query}`;
  }
  let response = await ApiHandler(url.type, _url, data, _header, baseURL);
  return response;
};
