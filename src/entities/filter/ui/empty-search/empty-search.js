import cn from "classnames";
import PropTypes from "prop-types";

// Styles
import styles from "./empty-search.module.scss";

export const EmptySearch = ({ className = "", message = "", actionSlot }) => {
  return (
    <div className={cn(styles.root, className)}>
      {message || "There are no results found. Please try another search or..."}
      {actionSlot && actionSlot}
    </div>
  );
};

EmptySearch.propTypes = {
  className: PropTypes.string,
  message: PropTypes.string,
  actionSlot: PropTypes.any,
};
