// Redux & Store
import { createAsyncThunk } from "@reduxjs/toolkit";

// Entities
import { filterCreated } from "entities/filter";
import { resetPage } from "entities/pagination";

export const addFilter = createAsyncThunk(
  "filter/addFilter",
  async (filter, { dispatch }) => {
    dispatch(filterCreated({ case: "add", filter }));
    dispatch(resetPage());
  }
);
