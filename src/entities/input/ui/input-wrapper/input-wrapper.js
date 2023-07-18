import PropTypes from "prop-types";
import { useEffect } from "react";

// Shared
import { getStorageParams, useInput } from "shared/lib";
import { Input } from "shared/ui";

// Styles
import styles from "./input-wrapper.module.scss";

// Svg
import { ReactComponent as IconReset } from "./assets/icon-close.svg";

export const InputWrapper = ({
  initialValue = "",
  forceValue = "",
  identifier = "",
  placeholder = "",
  inputType = "text",
  onChange = () => {},
  onKeyUp = () => {},
  actionSlot,
}) => {
  const [value, setValue, handleChange, handleBlur, handelReset] =
    useInput(initialValue);

  useEffect(() => {
    const params = getStorageParams();

    if (params[identifier]) {
      setValue((value) => params[identifier]);
    }
    // eslint-disable-next-line
  }, [identifier]);

  useEffect(() => {
    if (forceValue) {
      setValue((value) => forceValue);
    }
    // eslint-disable-next-line
  }, [forceValue]);

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
      <div data-testid="paintings-input" className={styles.input_wrapper}>
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
      {actionSlot && actionSlot}
    </div>
  );
};

InputWrapper.propTypes = {
  initialValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  forcePage: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  identifier: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onKeyUp: PropTypes.func,
};
