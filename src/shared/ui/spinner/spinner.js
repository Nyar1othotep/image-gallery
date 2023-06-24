import PropTypes from "prop-types";
import cn from "classnames";

// Styles
import styles from "./spinner.module.scss";

export const Spinner = ({ className = "", width = 50, height = 50 }) => {
  return (
    <div data-testid="spinner" className={cn(styles.root, className)}>
      <div
        className={styles.spinner}
        style={{
          "--spinner-width": `${width}px`,
          "--spinner-height": `${height}px`,
        }}
      >
        <div className={styles.wrapper}>
          <div></div>
        </div>
      </div>
    </div>
  );
};

Spinner.propTypes = {
  className: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};
