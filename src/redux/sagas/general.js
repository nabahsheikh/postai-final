import { take, put, call, fork } from "redux-saga/effects";
import {
  contactUsForm,
  uploadImageRequest,
  uploadImageSuccess,
} from "../slicers/general";
import { SAGA_ALERT_TIMEOUT, ALERT_TYPES } from "../../constants";
import {
  callRequest,
  CONTACT_US,
  FB_BASE_URL,
  FLASK_BASE_URL,
  GET_LONG_TIME_ACCESS_TOKEN,
  GET_POSTS,
  UPLOAD_IMAGE,
} from "../../config/webService";
import {
  getCurrentPageId,
  getCurrentUserId,
  toastAlert,
} from "../../services/utils";
import {
  getLongTimeAccessTokenRequest,
  getLongTimeAccessTokenSuccess,
  getPostsRequest,
  getPostsSuccess,
} from "../slicers/user";
import { manipulatePostsList } from "../../dataManipulator/post";

function* contactUs() {
  while (true) {
    // PAYLOAD PATTERN COMING FROM REDUX-TOOLKIT
    const { payload } = yield take(contactUsForm.type);
    console.log("contactUs", payload);
    // PARAMETER SEND FROM DISPATCH WILL DESTRUCTURE THERE
    const { payloadData, responseCallback } = payload;
    try {
      const response = yield call(
        callRequest,
        CONTACT_US,
        payloadData,
        "",
        "",
        {}
      );
      if (response.status) {
        if (responseCallback) responseCallback(response);
      } else {
        if (responseCallback) responseCallback(response);
        if (response.message) toastAlert(response.message, ALERT_TYPES.error);
      }
    } catch (err) {
      if (responseCallback) responseCallback(err);
    }
  }
}

function* getPosts() {
  while (true) {
    // PAYLOAD PATTERN COMING FROM REDUX-TOOLKIT
    const { payload } = yield take(getPostsRequest.type);
    // PARAMETER SEND FROM DISPATCH WILL DESTRUCTURE THERE
    const { responseCallback, queryParams } = payload;
    try {
      const response = yield call(
        callRequest,
        GET_POSTS,
        {},
        "",
        queryParams,
        {},
        `${FB_BASE_URL + getCurrentPageId()}`
      );
      if (response) {
        if (responseCallback) responseCallback(response);
        yield put(getPostsSuccess(manipulatePostsList(response?.data)));
      } else {
        if (responseCallback) responseCallback(response);
      }
    } catch (err) {
      console.log("sssss", err);
      if (responseCallback) responseCallback(err);
    }
  }
}

function* getLongTimeAccessToken() {
  while (true) {
    // PAYLOAD PATTERN COMING FROM REDUX-TOOLKIT
    const { payload } = yield take(getLongTimeAccessTokenRequest.type);
    // PARAMETER SEND FROM DISPATCH WILL DESTRUCTURE THERE
    console.log(payload, "pasy");
    const { responseCallback, queryParams } = payload;
    try {
      const response = yield call(
        callRequest,
        GET_LONG_TIME_ACCESS_TOKEN,
        {},
        "",
        queryParams,
        {
          withCredentials: true,
          "Access-Control-Allow-Origin": "*",
          "Referer-Policy": "no-referrer",
        },
        `${FB_BASE_URL}`
      );
      if (response) {
        console.log(response, "res");
        if (responseCallback) responseCallback(true, response);
        yield put(getLongTimeAccessTokenSuccess(response));
      } else {
        if (responseCallback) responseCallback(false, response);
      }
    } catch (err) {
      console.log("sssss", err);
      if (responseCallback) responseCallback(false, err);
    }
  }
}

function* uploadImage() {
  while (true) {
    // PAYLOAD PATTERN COMING FROM REDUX-TOOLKIT
    const { payload } = yield take(uploadImageRequest.type);
    // PARAMETER SEND FROM DISPATCH WILL DESTRUCTURE THERE
    const { responseCallback } = payload;
    console.log(payload, "upload");
    try {
      const response = yield call(
        callRequest,
        UPLOAD_IMAGE,
        payload.payload,
        "",
        "",
        {},
        `${FLASK_BASE_URL}`
      );
      if (response) {
        console.log(response, "image");
        yield put(uploadImageSuccess(response.data.file));
        responseCallback?.(true, response);
      } else {
        responseCallback?.(false, response);
        response.message && toastAlert(response.message, ALERT_TYPES.ERROR);
      }
    } catch (err) {
      responseCallback?.(false, err);
    }
  }
}

export default function* root() {
  yield fork(getPosts);
  yield fork(contactUs);
  yield fork(getLongTimeAccessToken);
  yield fork(uploadImage);
}
