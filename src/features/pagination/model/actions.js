// Redux & Store
import { createAsyncThunk } from "@reduxjs/toolkit";

// Entities
import { filterCreated, resetFilter } from "entities/filter";
import { resetPage, setPage } from "entities/pagination";

export const addSkipAndPage = createAsyncThunk(
  "pagination/addSkipAndPage",
  async ({ skip, page }, { dispatch }) => {
    dispatch(filterCreated({ case: "skip", skip }));
    dispatch(setPage(page));
  }
);

export const resetPagination = createAsyncThunk(
  "pagination/resetPagination",
  async (_, { dispatch }) => {
    dispatch(resetFilter());
    dispatch(resetPage());
  }
);
