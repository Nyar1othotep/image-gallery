import { createSlice } from "@reduxjs/toolkit";
import { Map } from "immutable";

const initialState = {
   query: {
      skip: 0,
   },
};

const querySlice = createSlice({
   name: "query",
   initialState,
   reducers: {
      queryCreated(state, action) {
         const { key, value } = action.payload;
         state.query = Map(state.query).set(key, value).toObject();
      },
      queryDeleted(state, action) {
         state.query = Map(state.query).delete(action.payload).toObject();
      },
   },
});

export const { queryCreated, queryDeleted } = querySlice.actions;

export default querySlice.reducer;
