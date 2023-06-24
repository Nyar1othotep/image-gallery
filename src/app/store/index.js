import { configureStore } from "@reduxjs/toolkit";
import { typicodeApi } from "shared/api";
import queryReducer from "shared/model/querySlice";
import { themeModel } from "features/toggle-theme";

export const createReduxStore = (initialState = {}) => {
  return configureStore({
    reducer: {
      query: queryReducer,
      theme: themeModel.reducer,
      [typicodeApi.apiSlice.reducerPath]: typicodeApi.apiSlice.reducer,
    },
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(typicodeApi.apiSlice.middleware),
    devTools: process.env.NODE_ENV !== "production",
  });
};
