// Redux & Store
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

// Store
import { rootReducers } from "./root-reducers";

// Shared
import { typicodeApi } from "shared/api";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["api"],
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

export const createReduxStore = () => {
  const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(typicodeApi.apiSlice.middleware),
    devTools: process.env.NODE_ENV !== "production",
  });

  setupListeners(store.dispatch);

  return store;
};

export const store = createReduxStore();
export const persistedStore = persistStore(store);
