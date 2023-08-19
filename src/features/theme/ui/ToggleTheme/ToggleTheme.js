import PropTypes from "prop-types";
import cn from "classnames";

// Redux & Store
import { useDispatch } from "react-redux";

// Entities
import { changeTheme, useTheme } from "entities/theme";

// Shared
import { ActionButton } from "shared/ui";

// Styles
import styles from "./ToggleTheme.module.scss";

// Svg
import { ReactComponent as IconTheme } from "./assets/icon-theme.svg";
import { useCallback } from "react";

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
      tabIndex={0}
      iconSlot={<IconTheme className={styles.svg} />}
    />
  );
};

ToggleTheme.propTypes = { className: PropTypes.string };
