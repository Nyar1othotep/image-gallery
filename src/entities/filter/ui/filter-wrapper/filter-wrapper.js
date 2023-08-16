import PropTypes from "prop-types";
import { useEffect } from "react";

// Redux & Store
import { useSelector } from "react-redux";

// Shared
import { useInput } from "shared/lib";
import { Input } from "shared/ui";

// Styles
import styles from "./filter-wrapper.module.scss";

// Svg
import { ReactComponent as IconReset } from "./assets/icon-close.svg";

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

  return (
    <div className={styles.root}>
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
        {value && <IconReset className={styles.reset} onClick={handelReset} />}
      </div>
      <div className={styles.slot}>{actionSlot && actionSlot}</div>
    </div>
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
