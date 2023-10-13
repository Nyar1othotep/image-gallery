import { createSlice } from "@reduxjs/toolkit";

import { themes } from "./themes";

const initialState = {
  theme: window.matchMedia(`(prefers-color-scheme: ${themes.light})`).matches
    ? themes.light
    : themes.dark,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme(state) {
      state.theme = state.theme === themes.dark ? themes.light : themes.dark;
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export const reducer = themeSlice.reducer;
