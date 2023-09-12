import PropTypes from "prop-types";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { FiX } from "react-icons/fi";

// Shared
import { Input } from "shared/ui";

import { useInput } from "../../lib/useInput";
import styles from "./FilterWrapper.module.scss";

export const FilterWrapper = ({
  initialValue = "",
  forceValue = "",
  identifier = "",
  placeholder = "",
  inputType = "text",
  onChange = () => {},
  onKeyUp = () => {},
  actionSlot,
}) => {
  const filter = useSelector((state) => state.filter.filter);
  const [value, setValue, handleChange, handleBlur, handelReset] =
    useInput(initialValue);

  useEffect(() => {
    if (filter[identifier]) {
      setValue((value) => filter[identifier]);
    }
    if (forceValue) {
      setValue((value) => forceValue);
    }
    // eslint-disable-next-line
  }, [identifier, forceValue]);

  useEffect(() => {
    onChange(value, identifier);
    // eslint-disable-next-line
  }, [value]);

  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      onKeyUp();
    }
  };

  const handleKeyUpReset = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      handelReset();
    }
  };

  return (
    <li className={styles.root}>
      <div className={styles.wrapper}>
        <Input
          className="xs-text collapse-text"
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyUp={handleKeyUp}
        />
        {value && (
          <FiX
            className={styles.reset}
            onClick={handelReset}
            onKeyUp={handleKeyUpReset}
            tabIndex={0}
            aria-label="Clear the query"
          />
        )}
      </div>
      {actionSlot && <div className={styles.slot}>{actionSlot}</div>}
    </li>
  );
};

FilterWrapper.propTypes = {
  initialValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  forceValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  identifier: PropTypes.string,
  placeholder: PropTypes.string,
  inputType: PropTypes.string,
  onChange: PropTypes.func,
  onKeyUp: PropTypes.func,
};
