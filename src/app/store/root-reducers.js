import { combineReducers } from "@reduxjs/toolkit";

// Features
import { themeReducer } from "features/theme";

// Entities
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
