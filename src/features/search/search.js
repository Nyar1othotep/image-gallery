import cn from "classnames";
import PropTypes from "prop-types";

// Styles
import styles from "./search.module.scss";

// Svg
import { ReactComponent as IconSearch } from "./assets/search.svg";

export const Search = ({ className = "", onClick = () => {} }) => {
  return (
    <div
      data-testid="search-button"
      className={cn(styles.root, className)}
      role="button"
      onClick={onClick}
    >
      <IconSearch data-testid="search-button-svg" className={styles.svg} />
    </div>
  );
};

Search.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};
