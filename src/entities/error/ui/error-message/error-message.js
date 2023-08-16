import cn from "classnames";
import PropTypes from "prop-types";

// Styles
import styles from "./error-message.module.scss";

export const ErrorMessage = ({ className = "", message = "", actionSlot }) => {
  return (
    <div className={cn(styles.root, className)}>
      {message ||
        "Oops! Something went wrong, check your connection and try again or..."}
      {actionSlot && actionSlot}
    </div>
  );
};

ErrorMessage.propTypes = {
  className: PropTypes.string,
  message: PropTypes.string,
  actionSlot: PropTypes.any,
};
