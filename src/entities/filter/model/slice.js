import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: { skip: 0 },
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterCreated(state, action) {
      switch (action.payload.case) {
        case "skip":
          state.filter.skip = action.payload.skip;
          break;
        case "add":
          state.filter = { skip: 0, ...action.payload.filter };
          break;
        default:
          state.filter.skip = 0;
          break;
      }
    },
  },
});

export const { filterCreated } = filterSlice.actions;
export const reducer = filterSlice.reducer;
