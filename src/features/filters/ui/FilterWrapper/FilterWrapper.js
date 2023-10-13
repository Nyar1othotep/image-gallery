import PropTypes from "prop-types";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { FiX, FiSearch } from "react-icons/fi";

// Shared
import { Input, ActionButton } from "shared/ui";
import { useInput } from "shared/lib";

import styles from "./FilterWrapper.module.scss";

export const FilterWrapper = ({
  initialValue = "",
  identifier = "",
  placeholder = "",
  inputType = "text",
  onChange = () => {},
}) => {
  const filter = useSelector((state) => state.filter.filter);
  const [value, setValue, handleChange, handleBlur, handelClear] =
    useInput(initialValue);

  useEffect(() => {
    if (filter[identifier]) {
      setValue((value) => filter[identifier]);
    }
    // eslint-disable-next-line
  }, [identifier]);

  const handleClick = () => onChange(value || null, identifier);

  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      onChange(value || null, identifier);
    }
  };

  const handleKeyUpReset = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      handelClear();
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
          <ClearQuery
            handelClear={handelClear}
            handleKeyUpReset={handleKeyUpReset}
          />
        )}
      </div>
      <SearchButton onClick={handleClick} onKeyUp={handleKeyUp} />
    </li>
  );
};

/**
 * @remark
 *
 * SearchButton and ClearQuery has been extracted as a separate components.
 * It's done to improve readability.
 */

const SearchButton = ({ onClick = () => {}, onKeyUp = () => {} }) => {
  return (
    <div className={styles.slot}>
      <ActionButton
        onClick={onClick}
        onKeyUp={onKeyUp}
        iconSlot={<FiSearch className={styles.svg} strokeWidth={1} />}
        tabIndex={0}
        aria-label="Search by query"
      />
    </div>
  );
};

const ClearQuery = ({
  handelClear = () => {},
  handleKeyUpReset = () => {},
}) => {
  return (
    <FiX
      className={styles.clear}
      onClick={handelClear}
      onKeyUp={handleKeyUpReset}
      tabIndex={0}
      aria-label="Clear the query"
    />
  );
};

FilterWrapper.propTypes = {
  initialValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  identifier: PropTypes.string,
  placeholder: PropTypes.string,
  inputType: PropTypes.string,
  onChange: PropTypes.func,
};
