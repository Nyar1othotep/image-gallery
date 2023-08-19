import PropTypes from "prop-types";
import cn from "classnames";

import styles from "./Input.module.scss";

export const Input = ({ className = "", ...others }) => {
  return <input className={cn(className, styles.input)} {...others} />;
};

Input.propTypes = { className: PropTypes.string };
