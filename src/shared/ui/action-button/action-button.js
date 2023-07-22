import cn from "classnames";
import PropTypes from "prop-types";

// Styles
import styles from "./action-button.module.scss";

export const ActionButton = ({ className = "", iconSlot, ...other }) => {
  return (
    <div className={cn(styles.root, className)} role="button" {...other}>
      {iconSlot && iconSlot}
    </div>
  );
};

ActionButton.propTypes = { iconSlot: PropTypes.any };
