import PropTypes from "prop-types";
import cn from "classnames";

// Styles
import styles from "./toggle-theme.module.scss";

// Svg
import { ReactComponent as IconTheme } from "./assets/icon-theme.svg";

export const ToggleTheme = ({ className = "", onClick = () => {} }) => {
  return (
    <div
      data-testid="toggle-theme"
      className={cn(styles.root, className)}
      role="button"
      onClick={onClick}
    >
      <IconTheme data-testid="toggle-theme-svg" className={styles.svg} />
    </div>
  );
};

ToggleTheme.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};
