import { Link } from "react-router-dom";

// Features
import { ToggleTheme } from "features/theme";

import { ReactComponent as IconLogo } from "./assets/logo.svg";
import styles from "./HeaderLayout.module.scss";

export const HeaderLayout = () => {
  return (
    <header className={styles.root}>
      <Link to="/">
        <IconLogo className={styles.logo} />
      </Link>
      <ToggleTheme />
    </header>
  );
};
