import { combineReducers } from "@reduxjs/toolkit";

// Features
import { themeReducer } from "features/theme";
import { filterReducer } from "features/filters";

// Shared
import { baseApi } from "shared/api";

export const rootReducers = combineReducers({
  theme: themeReducer,
  filter: filterReducer,
  [baseApi.reducerPath]: baseApi.reducer,
});
