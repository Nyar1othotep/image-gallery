import { useEffect } from "react";

// Model
import { useTheme } from "../model";

export const ThemeProvider = ({ children }) => {
  const theme = useTheme();

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return <>{children}</>;
};
