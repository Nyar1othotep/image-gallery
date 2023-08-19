import { combineReducers } from "@reduxjs/toolkit";

// Entities
import { themeReducer } from "entities/theme";
import { filterReducer } from "entities/filter";
import { pageReducer } from "entities/pagination";

// Shared
import { baseApi } from "shared/api";

export const rootReducers = combineReducers({
  theme: themeReducer,
  filter: filterReducer,
  page: pageReducer,
  [baseApi.reducerPath]: baseApi.reducer,
});
