// @flow
import _ from "lodash";
import { createSlice, current } from "@reduxjs/toolkit";
import Immutable from "seamless-immutable";

const PagesReducer = createSlice({
  name: "pages",
  initialState: Immutable({
    list: [],
    selectedPageToken: "",
    selectedPageId: "",
    selectedPageCategory: "",
  }),
  reducers: {
    // GET PAGES LIST
    getPageListRequest() {},
    getPageListSuccess(state, action) {
      console.log(action.payload, "data");
      state.list = action.payload;
    },

    // SET SELECTED PAGE
    setSelectedPageToken(state, action) {
      state.selectedPageToken = action.payload.access_token;
      state.selectedPageId = action.payload.id;
      state.selectedPageCategory = action.payload.category;
    },

    //CREATE POST
    createPostRequest() {},
  },
});

export const {
  getPageListRequest,
  getPageListSuccess,
  setSelectedPageToken,
  createPostRequest,
} = PagesReducer.actions;

export default PagesReducer.reducer;
