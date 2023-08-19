// Redux
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// API url
import { API_URL } from "shared/config";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: () => ({}),
});
