import { Link } from "react-router-dom";

// Features
import { ToggleTheme } from "features/theme";

// Svg
import { ReactComponent as IconLogo } from "./assets/logo.svg";

// Styles
import styles from "./header.module.scss";

export const Header = () => {
  return (
    <header className={styles.root}>
      <Link to="/">
        <IconLogo className={styles.logo} />
      </Link>
      <ToggleTheme />
    </header>
  );
};
