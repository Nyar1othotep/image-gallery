import { useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";

export const useTheme = () =>
   useSelector(
      createSelector(
         (state) => state.theme.theme,
         (theme) => theme
      )
   );
