import cn from "classnames";
import PropTypes from "prop-types";

import styles from "./ErrorMessage.module.scss";
import { ActionButton } from "../ActionButton/ActionButton";

/**
 * @remark
 *
 * This module used to exist as a 'feature', however,
 * I found it necessary to relocate it to the 'shared' directory for the following reasons:
 *
 * (1) The module can be reused in other projects.
 * (2) The module can be considered isolated.
 */

export const ErrorMessage = ({ className = "", message = "" }) => {
  const handleReload = () => {
    localStorage.clear();
    window.location.reload(false);
  };

  return (
    <div className={cn(styles.root, className)}>
      {message ||
        "Oops! Something went wrong, check your connection and try again or..."}

      <ActionButton
        className={styles.btn}
        contentSlot={<h4>Reload page</h4>}
        onClick={handleReload}
      />
    </div>
  );
};

ErrorMessage.propTypes = {
  className: PropTypes.string,
  message: PropTypes.string,
};
