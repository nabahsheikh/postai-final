import { take, put, call, fork } from "redux-saga/effects";
import { contactUsForm } from "../slicers/general";
import { SAGA_ALERT_TIMEOUT, ALERT_TYPES } from "../../constants";
import {
  callRequest,
  CREATE_POST,
  FB_BASE_URL,
  GET_PAGES,
  GET_POSTS,
} from "../../config/webService";
import {
  getCurrentPageId,
  getCurrentUserId,
  toastAlert,
} from "../../services/utils";
import { manipulatePostsList } from "../../dataManipulator/post";
import {
  createPostRequest,
  getPageListRequest,
  getPageListSuccess,
} from "../slicers/pages";
import { manipulatePagesList } from "../../dataManipulator/page";

function* getPagesList() {
  while (true) {
    // PAYLOAD PATTERN COMING FROM REDUX-TOOLKIT
    const { payload } = yield take(getPageListRequest.type);
    // PARAMETER SEND FROM DISPATCH WILL DESTRUCTURE THERE
    const { responseCallback, queryParams } = payload;
    try {
      const response = yield call(
        callRequest,
        GET_PAGES,
        {},
        "",
        queryParams,
        {},
        `${FB_BASE_URL + getCurrentUserId()}`
      );
      if (response) {
        if (responseCallback) responseCallback(response);
        yield put(getPageListSuccess(manipulatePagesList(response?.data)));
      } else {
        if (responseCallback) responseCallback(response);
      }
    } catch (err) {
      console.log("sssss", err);
      if (responseCallback) responseCallback(err);
    }
  }
}

function* createPost() {
  while (true) {
    // PAYLOAD PATTERN COMING FROM REDUX-TOOLKIT
    const { payload } = yield take(createPostRequest.type);
    // PARAMETER SEND FROM DISPATCH WILL DESTRUCTURE THERE
    const { responseCallback, queryParams } = payload;
    try {
      const response = yield call(
        callRequest,
        CREATE_POST,
        {},
        "",
        queryParams,
        {},
        `${FB_BASE_URL + getCurrentPageId()}`
      );
      if (response) {
        if (responseCallback) responseCallback(true, response);
        yield put(getPageListSuccess(manipulatePagesList(response?.data)));
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
  yield fork(getPagesList);
  yield fork(createPost);
}
