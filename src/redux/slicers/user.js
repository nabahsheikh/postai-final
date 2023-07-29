// @flow
import _ from "lodash";
import { createSlice, current } from "@reduxjs/toolkit";
import Immutable from "seamless-immutable";
import { cloneDeepItem } from "../../services/utils";

const UserReducer = createSlice({
  name: "user",
  initialState: Immutable({
    data: {},
    profileSections: [],
    isAuthenticated: false,
    isError: null,
    keyword: "",
    ScheduledList: [],
    posts: [],
  }),
  reducers: {
    // USER LOGIN
    userLoginRequest(state, action) {
      state.isAuthenticated = true;
    },
    userLoginSuccess(state, action) {
      let newData = cloneDeepItem(state.data);
      newData.access_token = action.payload.accessToken;

      newData.name = action.payload.name;
      newData.email = action.payload.email;
      newData.id = action.payload.id;
      newData.thumb = action.payload.picture.data.url;
      state.data = newData;
      // Immutable.merge(state, { data: newData });
      state.isAuthenticated = true;
    },
    // REFRESH TOKEN
    refreshToken(state, action) {
      let newData = cloneDeepItem(state.data);
      newData.access_token = action.payload.access_token;
      newData.refresh_token = action.payload.refresh_token;
      Immutable.merge(state, { data: newData });
    },
    //LONG TIME ACCESS TOKEN
    getLongTimeAccessTokenRequest() {},
    getLongTimeAccessTokenSuccess(state, action) {
      let newData = cloneDeepItem(state.data);
      newData.access_token = action.payload.access_token;
      state.data = newData;
    },

    // SET AUTH ERROR
    setAuthError(state, action) {
      state.isError = action.payload;
    },

    // REMOVE AUTH ERROR
    removeAuthError(state, action) {
      state.isError = null;
    },

    // USER SIGNOUT

    // USER SIGNOUT
    userSignOutRequest(state, action) {
      state.isAuthenticated = false;
    },

    userSignOutSuccess(state, action) {
      state.isAuthenticated = false;
    },
    setKeyword(state, action) {
      state.keyword = action.payload;
    },
    setScheduledList(state, action) {
      let items = state.ScheduledList;
      let comingdata = action?.payload;
      comingdata.forEach((element) => {
        // const elementExist = items.includes(element);s
        const isElementExist = items?.find(
          (ele) => ele?.image === element.image
        );
        if (_.isEmpty(isElementExist)) {
          items = [...items, element];
          state.ScheduledList = items;
        }
      });
      // state.ScheduledList = [...state.ScheduledList, action.payload];
      console.log(state.ScheduledList);
    },

    getPostsRequest() {},
    getPostsSuccess(state, action) {
      console.log(action.payload, "posts");
      state.posts = action.payload;
    },
  },
});

export const {
  userLoginRequest,
  refreshToken,
  setAuthError,
  removeAuthError,
  userSignOutRequest,
  userSignOutSuccess,
  setKeyword,
  setScheduledList,
  userLoginSuccess,
  getPostsRequest,
  getPostsSuccess,
  getLongTimeAccessTokenRequest,
  getLongTimeAccessTokenSuccess,
} = UserReducer.actions;

export default UserReducer.reducer;
