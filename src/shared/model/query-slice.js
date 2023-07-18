import { createSlice } from "@reduxjs/toolkit";

// lib
import { initStorageParams } from "../lib";

const initialState = {
  query: initStorageParams({ skip: 0 }),
};

const querySlice = createSlice({
  name: "query",
  initialState,
  reducers: {
    queryCreated(state, action) {
      switch (action.payload.case) {
        case "skip":
          state.query.skip = action.payload.skip;
          break;
        case "search":
          state.query = { skip: 0, ...action.payload.params };
          break;
        default:
          state.query.skip = 0;
          break;
      }
    },
  },
});

export const { queryCreated } = querySlice.actions;

export default querySlice.reducer;
