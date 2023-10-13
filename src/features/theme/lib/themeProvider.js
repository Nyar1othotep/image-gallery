import { useEffect } from "react";
import { useSelector } from "react-redux";

export const ThemeProvider = ({ children }) => {
  const theme = useSelector((state) => state.theme.theme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return <>{children}</>;
};
