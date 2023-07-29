import axios from "axios";
import DataHandler from "./DataHandler";
import {
  ERROR_API_NOT_FOUND,
  ERROR_ACCOUNT_BLOCKED,
  ERROR_SOMETHING_WENT_WRONG,
  ERROR_NETWORK_NOT_AVAILABLE,
} from "../config/webService";
import { ALERT_TYPES, API_LOG, API_TIMEOUT } from "../constants";
import { userSignOutSuccess, setAuthError } from "../redux/slicers/user";
import { refreshAccessToken, toastAlert } from "./utils";

const userBlocked = (res) => {
  DataHandler.getStore().dispatch(
    setAuthError(res.data.message || ERROR_ACCOUNT_BLOCKED)
  );
  DataHandler.getStore().dispatch(userSignOutSuccess());
};

const onForbidden = async () => {
  const newToken = await refreshAccessToken();
  if (newToken) {
    return newToken;
  }
  DataHandler.getStore().dispatch(setAuthError(ERROR_ACCOUNT_BLOCKED));
  DataHandler.getStore().dispatch(userSignOutSuccess());
  return false;
};

const manipulateResponse = (response) => {
  console.log("gggg", response);
  return new Promise((resolve, reject) => {
    if (response.data && !response.data.error) {
      resolve(response.data);
    } else {
      reject(response.data || ERROR_SOMETHING_WENT_WRONG);
    }
  });
};
const ApiHandler = async (request, url, data, headers, baseUrl) => {
  if (API_LOG) {
    console.log("url", url);
    console.log("data", data);
    console.log("headers", headers);
  }
  try {
    const response = await axios({
      baseURL: baseUrl || process.env.REACT_APP_BACKEND_ENV,
      timeout: API_TIMEOUT,
      method: request,
      url: url,
      data: data,
      headers: headers,
    });
    if (API_LOG) {
      console.log("response", response);
    }
    return manipulateResponse(response);
  } catch ({ response }) {
    if (API_LOG) {
      console.log("response", response);
    }
    if (response?.status === 404) {
      toastAlert(ERROR_API_NOT_FOUND, ALERT_TYPES.error);
      return { status: false };
    }
    if (response?.status === 403) {
      userBlocked(response);
      return { status: false };
    }
    if (response?.status === 401) {
      try {
        const newToken = await onForbidden();
        if (newToken) {
          headers.Authorization = `Bearer ${newToken}`;
          await ApiHandler(request, url, data, headers, baseUrl);
        } else {
          return { status: false };
        }
      } catch (err) {
        console.log(err);
      }
    }
    if (response?.status === 500) {
      toastAlert(ERROR_SOMETHING_WENT_WRONG, ALERT_TYPES.error);
      return { status: false, message: ERROR_SOMETHING_WENT_WRONG };
    }
    if (response?.problem === "NETWORK_ERROR") {
      toastAlert(ERROR_NETWORK_NOT_AVAILABLE, ALERT_TYPES.error);
      return { status: false, message: ERROR_NETWORK_NOT_AVAILABLE };
    } else {
      if (typeof response.data.message == "object") {
        return { status: false, errors: response.data.message };
      }
      return { status: false, message: response.data.message };
    }
  }
};

export default ApiHandler;
