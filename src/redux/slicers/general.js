// @flow
import _ from "lodash";
import { createSlice } from "@reduxjs/toolkit";
import Immutable from "seamless-immutable";

const GeneralReducer = createSlice({
  name: "general",
  initialState: Immutable({
    accessToken: "",
    uploadedImage: "",
    uploadedImageFile: null,
    // refreshToken: "",
    // selectedIndex: 0,
    // vehicleTypes: [],
    // showEta: true,
  }),
  reducers: {
    contactUsForm() {},
    uploadImageRequest() {},
    uploadImageSuccess(state, action) {
      state.uploadedImage = action.payload;
    },
    setUploadedImage(state, action) {
      state.uploadedImageFile = action.payload;
    },
  },
});

export const {
  contactUsForm,
  uploadImageRequest,
  uploadImageSuccess,
  setUploadedImage,
} = GeneralReducer.actions;

export default GeneralReducer.reducer;
