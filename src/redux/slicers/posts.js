// @flow
import _ from "lodash";
import { createSlice, current } from "@reduxjs/toolkit";
import Immutable from "seamless-immutable";

const PostsReducer = createSlice({
  name: "posts",
  initialState: Immutable({
    list: [],
    caption: [],
    scheduledList: [],
  }),
  reducers: {
    // GET POSTS LIST
    getGeneratedPostListRequest() {},
    getGeneratedPostListSuccess(state, action) {
      state.list = action.payload;
    },
    getGeneratedCaptionListRequest() {},
    getGeneratedCaptionListSuccess(state, action) {
      state.caption = action.payload;
    },
    getScheduledPostsListRequest() {},
    getScheduledPostsListSuccess(state, action) {
      console.log(action.payload, "data sh");
      state.list = action.payload;
    },
    //SAVE POST
    savePostRequest() {},
    savePostSuccess(state, action) {},
  },
});

export const {
  getGeneratedPostListRequest,
  getGeneratedPostListSuccess,
  getGeneratedCaptionListRequest,
  getGeneratedCaptionListSuccess,
  getScheduledPostsListRequest,
  getScheduledPostsListSuccess,
  savePostRequest,
  savePostSuccess,
} = PostsReducer.actions;

export default PostsReducer.reducer;
