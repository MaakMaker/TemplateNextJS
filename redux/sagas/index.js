import {all} from "redux-saga/effects";
import notesSagas from "./Notes";

export default function* rootSaga(getState) {
  yield all([
    notesSagas()
  ]);
}
