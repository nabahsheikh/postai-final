import { combineReducers } from "@reduxjs/toolkit";

import general from "./general";
import user from "./user";
import subscription from "./subscription";
import pages from "./pages";
import posts from "./posts";

export default combineReducers({
  general,
  user,
  subscription,
  pages,
  posts,
});
