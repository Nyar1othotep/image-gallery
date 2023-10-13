import PropTypes from "prop-types";
import cn from "classnames";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { FiSun, FiMoon } from "react-icons/fi";

// Entities
import { changeTheme } from "../../model/themeSlice";
import { useTheme } from "../../model/themeSelectors";

// Shared
import { ActionButton } from "shared/ui";

import styles from "./ToggleTheme.module.scss";

export const ToggleTheme = ({ className = "" }) => {
  const dispatch = useDispatch();
  const theme = useTheme();

  const handleTheme = useCallback(() => {
    dispatch(changeTheme());
    // eslint-disable-next-line
  }, [theme]);

  const handleKeyUp = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      handleTheme();
    }
  };

  return (
    <ActionButton
      className={cn(styles.root, className)}
      onClick={handleTheme}
      onKeyUp={handleKeyUp}
      iconSlot={
        theme === "light" ? (
          <FiMoon className={styles.svg} strokeWidth={1} />
        ) : (
          <FiSun className={styles.svg} strokeWidth={1} />
        )
      }
      tabIndex={0}
      aria-label="Switch between dark and light mode"
    />
  );
};

ToggleTheme.propTypes = { className: PropTypes.string };
