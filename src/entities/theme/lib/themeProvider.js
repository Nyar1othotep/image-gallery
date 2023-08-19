import { useEffect } from "react";

import { useTheme } from "../model/themeSelectors";

export const ThemeProvider = ({ children }) => {
  const theme = useTheme();

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return <>{children}</>;
};
