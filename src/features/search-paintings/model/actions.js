// Redux & Store
import { createAsyncThunk } from "@reduxjs/toolkit";

// Shared
import { queryCreated } from "shared/model";
import { setStorageParams } from "shared/lib";

export const searchPaintings = createAsyncThunk(
  "paintings/search",
  async (params, { dispatch }) => {
    dispatch(queryCreated({ case: "search", params }));

    setStorageParams({ skip: 0, ...params });
  }
);
