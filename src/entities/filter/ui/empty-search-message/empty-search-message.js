import cn from "classnames";
import PropTypes from "prop-types";

// Styles
import styles from "./empty-search-message.module.scss";

export const EmptySearchMessage = ({
  className = "",
  message = "",
  actionSlot,
}) => {
  return (
    <div className={cn(styles.root, className)}>
      {message || "There are no results found. Please try another search or..."}
      {actionSlot && actionSlot}
    </div>
  );
};

EmptySearchMessage.propTypes = {
  className: PropTypes.string,
  message: PropTypes.string,
  actionSlot: PropTypes.any,
};