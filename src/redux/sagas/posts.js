import { take, put, call, fork } from "redux-saga/effects";
import { contactUsForm } from "../slicers/general";
import { SAGA_ALERT_TIMEOUT, ALERT_TYPES } from "../../constants";
import {
  callRequest,
  FLASK_BASE_URL,
  GET_GENERATED_POSTS,
  GET_CAPTION,
  GET_SCHEDULED_POSTS,
  FB_BASE_URL,
  SAVE_POSTS,
} from "../../config/webService";
import {
  getGeneratedPostListRequest,
  getGeneratedPostListSuccess,
  getGeneratedCaptionListRequest,
  getGeneratedCaptionListSuccess,
  getScheduledPostsListRequest,
  getScheduledPostsListSuccess,
  savePostRequest,
  savePostSuccess,
} from "../slicers/posts";
import { getCurrentPageId } from "../../services/utils";
import { manipulateScheduledPostsList } from "../../dataManipulator/post";

function* getPostsList() {
  while (true) {
    // PAYLOAD PATTERN COMING FROM REDUX-TOOLKIT
    const { payload } = yield take(getGeneratedPostListRequest.type);
    // PARAMETER SEND FROM DISPATCH WILL DESTRUCTURE THERE
    const { responseCallback, queryParams } = payload;
    console.log(queryParams, "query");
    try {
      const response = yield call(
        callRequest,
        GET_GENERATED_POSTS,
        payload.payload,
        "",
        queryParams,
        {
          // withCredentials: true,
          // "Access-Control-Allow-Origin": "*",
          // "Referer-Policy": "no-referrer",
          // Referer: "https://post-ai.web.app",
        },
        `${FLASK_BASE_URL}`
      );
      if (response) {
        if (responseCallback) responseCallback(response);
        yield put(getGeneratedPostListSuccess(response?.data));
      } else {
        if (responseCallback) responseCallback(response);
      }
    } catch (err) {
      console.log("sssss", err);
      if (responseCallback) responseCallback(err);
    }
  }
}
function* getCaptionList() {
  while (true) {
    // PAYLOAD PATTERN COMING FROM REDUX-TOOLKIT
    const { payload } = yield take(getGeneratedCaptionListRequest.type);
    // PARAMETER SEND FROM DISPATCH WILL DESTRUCTURE THERE
    const { responseCallback, queryParams } = payload;
    console.log(queryParams, "query");
    try {
      const response = yield call(
        callRequest,
        GET_CAPTION,
        {},
        "",
        queryParams,
        {
          // withCredentials: true,
          // "Access-Control-Allow-Origin": "*",
          // "Referer-Policy": "no-referrer",
          // Referer: "https://post-ai.web.app",
        },
        `${FLASK_BASE_URL}`
      );
      if (response) {
        if (responseCallback) responseCallback(response);
        yield put(getGeneratedCaptionListSuccess(response));
      } else {
        if (responseCallback) responseCallback(response);
      }
    } catch (err) {
      console.log("sssss", err);
      if (responseCallback) responseCallback(err);
    }
  }
}

function* getScheduledPosts() {
  while (true) {
    // PAYLOAD PATTERN COMING FROM REDUX-TOOLKIT
    const { payload } = yield take(getScheduledPostsListRequest.type);
    // PARAMETER SEND FROM DISPATCH WILL DESTRUCTURE THERE
    const { responseCallback, queryParams } = payload;
    try {
      const response = yield call(
        callRequest,
        GET_SCHEDULED_POSTS,
        {},
        "",
        queryParams,
        {},
        `${FB_BASE_URL + getCurrentPageId()}`
      );
      if (response) {
        if (responseCallback) responseCallback(response);
        yield put(
          getScheduledPostsListSuccess(
            manipulateScheduledPostsList(response?.data)
          )
        );
      } else {
        if (responseCallback) responseCallback(response);
      }
    } catch (err) {
      console.log("sssss", err);
      if (responseCallback) responseCallback(err);
    }
  }
}

function* savePost() {
  while (true) {
    // PAYLOAD PATTERN COMING FROM REDUX-TOOLKIT
    const { payload } = yield take(savePostRequest.type);
    // PARAMETER SEND FROM DISPATCH WILL DESTRUCTURE THERE
    const { responseCallback } = payload;
    try {
      const response = yield call(
        callRequest,
        SAVE_POSTS,
        payload.payload,
        "",
        {},
        {
          // withCredentials: true,
          // "Access-Control-Allow-Origin": "*",
          // "Referer-Policy": "no-referrer",
          // Referer: "https://post-ai.web.app",
        },
        `${FLASK_BASE_URL}`
      );
      if (response) {
        if (responseCallback) responseCallback(response);
        yield put(savePostSuccess(response?.data));
      } else {
        if (responseCallback) responseCallback(response);
      }
    } catch (err) {
      console.log("sssss", err);
      if (responseCallback) responseCallback(err);
    }
  }
}

export default function* root() {
  yield fork(getPostsList);
  yield fork(getCaptionList);
  yield fork(getScheduledPosts);
  yield fork(savePost);
}
