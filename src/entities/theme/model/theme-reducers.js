// Redux
import { createSlice } from "@reduxjs/toolkit";

// Config
import { themes } from "../config";

const initialState = {
  theme: window.matchMedia(`(prefers-color-scheme: ${themes.light})`)
    ? themes.light
    : themes.dark,
};

const themeModel = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme(state) {
      state.theme = state.theme === themes.dark ? themes.light : themes.dark;
    },
  },
});

export const { changeTheme } = themeModel.actions;
export const reducer = themeModel.reducer;
