import cn from "classnames";
import PropTypes from "prop-types";

import styles from "./ActionButton.module.scss";

export const ActionButton = ({
  className = "",
  contentSlot,
  iconSlot,
  ...other
}) => {
  return (
    <div className={cn(styles.root, className)} role="button" {...other}>
      {contentSlot && contentSlot}
      {iconSlot && iconSlot}
    </div>
  );
};

ActionButton.propTypes = {
  className: PropTypes.string,
  contentSlot: PropTypes.any,
  iconSlot: PropTypes.any,
};
