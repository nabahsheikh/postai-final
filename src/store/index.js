import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import reduxStorage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import sagas from "../redux/sagas";
import { PROD_ENV } from "../constants";
import logger from "redux-logger";
export default function (reducers, onComplete) {
  const persistConfig = {
    key: "root",
    storage: reduxStorage,
    stateReconciler: autoMergeLevel2,
    whitelist: ["user"],
  };

  const sagaMiddleware = createSagaMiddleware();
  const pReducer = persistReducer(persistConfig, reducers);
  const middlewares = [sagaMiddleware];

  if (process.env.REACT_APP_ENV === PROD_ENV) {
    middlewares.push(logger);
  }

  const store = configureStore({
    reducer: pReducer,
    devTools: process.env.REACT_APP_ENV !== PROD_ENV,
    middleware: (getDefaultMiddleware) => [
      ...getDefaultMiddleware({
        thunk: false,
        serializableCheck: false,
      }),
      ...middlewares,
    ],
  });

  setTimeout(() => {
    onComplete();
  }, 1000);

  sagaMiddleware.run(sagas);

  return store;
}
