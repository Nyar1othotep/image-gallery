import { configureStore } from "@reduxjs/toolkit";
import { typicodeApi } from "shared/api";
import queryReducer from "shared/model/query-slice";
import pageReducer from "shared/model/page-slice";
import { themeModel } from "features/toggle-theme";

export const createReduxStore = (initialState = {}) => {
  return configureStore({
    reducer: {
      query: queryReducer,
      page: pageReducer,
      theme: themeModel.reducer,
      [typicodeApi.apiSlice.reducerPath]: typicodeApi.apiSlice.reducer,
    },
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(typicodeApi.apiSlice.middleware),
    devTools: process.env.NODE_ENV !== "production",
  });
};
