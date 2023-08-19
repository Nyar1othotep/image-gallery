import { createAsyncThunk } from "@reduxjs/toolkit";

// Entities
import { filterCreated } from "entities/filter";
import { setPage } from "entities/pagination";

export const addSkipAndPage = createAsyncThunk(
  "pagination/addSkipAndPage",
  async ({ skip, page }, { dispatch }) => {
    dispatch(filterCreated({ case: "skip", skip }));
    dispatch(setPage(page));
  }
);
