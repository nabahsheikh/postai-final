import { take, put, call, fork } from "redux-saga/effects";
import {
  getSubscriptionsRequest,
  getSubscriptionsSuccess,
} from "../slicers/subscription";
import { ALERT_TYPES } from "../../constants";
import { callRequest, GET_SUBSCRIPTIONS } from "../../config/webService";
import { toastAlert } from "../../services/utils";

function* getSubscriptions() {
  while (true) {
    // PAYLOAD PATTERN COMING FROM REDUX-TOOLKIT
    const { payload } = yield take(getSubscriptionsRequest.type);
    // PARAMETER SEND FROM DISPATCH WILL DESTRUCTURE THERE
    const { responseCallback } = payload;
    try {
      const response = yield call(
        callRequest,
        GET_SUBSCRIPTIONS,
        {},
        "",
        "",
        {}
      );
      if (response.status) {
        if (responseCallback) responseCallback(response);
        yield put(getSubscriptionsSuccess(response));
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
  yield fork(getSubscriptions);
}
