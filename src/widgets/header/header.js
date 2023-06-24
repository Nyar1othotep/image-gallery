import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";

// Features
import { ToggleTheme, themeModel } from "features/toggle-theme";

// Svg
import { ReactComponent as IconLogo } from "./assets/logo.svg";

// Styles
import styles from "./header.module.scss";

export const Header = () => {
  const dispatch = useDispatch();

  const theme = themeModel.useTheme();

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = () => dispatch(themeModel.changeTheme());

  return (
    <header className={styles.root}>
      <Link to="/">
        <IconLogo data-testid="logo-svg" className={styles.logo} />
      </Link>
      <ToggleTheme className={styles.theme} onClick={handleTheme} />
    </header>
  );
};
