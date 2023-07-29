import { fork } from "redux-saga/effects";
import general from "./general";
import subscription from "./subscription";
import pages from "./pages";
import posts from "./posts";

export default function* root() {
  yield fork(general);
  yield fork(subscription);
  yield fork(pages);
  yield fork(posts);
}
