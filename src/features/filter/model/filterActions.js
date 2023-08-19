// Redux & Store
import { createAsyncThunk } from "@reduxjs/toolkit";

// Entities
import { filterCreated, resetFilter } from "entities/filter";
import { resetPage } from "entities/pagination";

export const addFilter = createAsyncThunk(
  "artworks-filter/addFilter",
  async (filter, { dispatch }) => {
    dispatch(filterCreated({ case: "add", filter }));
    dispatch(resetPage());
  }
);

export const resetFilters = createAsyncThunk(
  "pagination/resetPagination",
  async (_, { dispatch }) => {
    dispatch(resetFilter());
    dispatch(resetPage());
  }
);
