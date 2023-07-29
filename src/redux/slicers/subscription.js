// @flow
import _ from "lodash";
import { createSlice } from "@reduxjs/toolkit";
import Immutable from "seamless-immutable";
import { cloneDeepItem } from "../../services/utils";

const SubscriptionReducer = createSlice({
  name: "user",
  initialState: Immutable({
    data: [
      {
        id: 1,
        name: "Encubator",
        price: 150.0,
        duration: "Monthly",
        features: ["Featured on Newsletter", "All Unlimited Links Access"],
        addons: [
          {
            id: 1,
            title: "Add Businees Mentor",
            amount: 250,
          },
          {
            id: 2,
            title: "Add Personal Project Manager",
            amount: 250,
          },
          {
            id: 3,
            title: "Personal Project Manager + Mentor",
            amount: 500,
          },
        ],
      },
      {
        id: 2,
        name: "Accelerator",
        price: 250.0,
        duration: "Monthly",
        features: [
          "Featured on Newsletter",
          "All Unlimited Links Access",
          "optimizing Hashtag",
        ],
        addons: [
          {
            id: 1,
            title: "Add Businees Mentor",
            amount: 250,
          },
          {
            id: 2,
            title: "Add Personal Project Manager",
            amount: 250,
          },
          {
            id: 3,
            title: "Personal Project Manager + Mentor",
            amount: 500,
          },
        ],
      },
    ],
    single: {},
  }),
  reducers: {
    // GET ALL SUBSCRIPTIONS REQUEST
    getSubscriptionsRequest() {},
    // GET ALL SUBSCRIPTIONS SUCCESS
    getSubscriptionsSuccess(state, action) {
      console.log("obaid ", action.payload);
      //   state.subscriptions = action.payload.data;
    },
  },
});

export const { getSubscriptionsRequest, getSubscriptionsSuccess } =
  SubscriptionReducer.actions;

export default SubscriptionReducer.reducer;
