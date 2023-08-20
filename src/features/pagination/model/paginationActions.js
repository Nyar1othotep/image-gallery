import { createAsyncThunk } from "@reduxjs/toolkit";

// Entities
import { createFilter } from "entities/filter";
import { setPage } from "entities/pagination";

export const addSkipAndPage = createAsyncThunk(
  "pagination/addSkipAndPage",
  async ({ skip, page }, { dispatch }) => {
    dispatch(createFilter({ case: "skip", skip }));
    dispatch(setPage(page));
  }
);
