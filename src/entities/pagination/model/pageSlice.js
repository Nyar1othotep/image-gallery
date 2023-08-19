import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 1,
  perPage: 20,
};

const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    setPage(state, action) {
      state.page = action.payload;
    },
    setPerPage(state, action) {
      state.perPage = action.payload;
    },
    resetPage: () => initialState,
  },
});

export const { setPage, setPerPage, resetPage } = pageSlice.actions;
export const reducer = pageSlice.reducer;
