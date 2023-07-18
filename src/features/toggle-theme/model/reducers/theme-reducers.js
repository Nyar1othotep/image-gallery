// Redux
import { createSlice } from "@reduxjs/toolkit";

// Lib
import { getTheme } from "../../lib";

// Config
import { themes } from "../../config";

const initialState = {
  theme: getTheme(),
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
