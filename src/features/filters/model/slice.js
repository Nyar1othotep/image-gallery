import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: { skip: 0, limit: 20 },
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    createFilter(state, action) {
      state.filter = { ...state.filter, ...action.payload };
    },
    resetFilter: () => initialState,
  },
});

export const { createFilter, resetFilter } = filterSlice.actions;
export const reducer = filterSlice.reducer;
