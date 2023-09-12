import { Link } from "react-router-dom";

// Features
import { ToggleTheme } from "features/theme";

import { Logo } from "../Logo/Logo";
import styles from "./HeaderLayout.module.scss";

export const HeaderLayout = () => {
  return (
    <header className={styles.root}>
      <Link to="/" aria-label="Image gallery logo">
        <Logo />
      </Link>
      <ToggleTheme />
    </header>
  );
};
