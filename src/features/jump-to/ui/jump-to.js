import PropTypes from "prop-types";
import { useEffect, useState } from "react";

// Redux & Store
import { useDispatch, useSelector } from "react-redux";

// Entities
import { InputWrapper } from "entities/input";

// Styles
import styles from "./jump-to.module.scss";

// Svg
import { ReactComponent as IconJumpTo } from "./assets/arrow.svg";
import { queryCreated, setPage } from "shared/model";

export const JumpTo = ({ forcePage, pageCount, onPageChange }) => {
  const minValue = 1;
  const dispatch = useDispatch();
  const { page, perPage } = useSelector((state) => state.page);
  const [value, setValue] = useState(page);

  // useEffect(() => {
  //   setValue((value) => forcePage + 1);
  //   // eslint-disable-next-line
  // }, [forcePage]);

  const handleChange = (val) => {
    setValue((value) => val);
  };

  const handleJumpTo = () => {
    if (value < minValue || value > pageCount) {
      alert("Please enter a valid value");
    } else {
      dispatch(setPage(value));
      const skip = value * perPage;
      dispatch(queryCreated({ case: "skip", skip }));
    }
  };

  return (
    <div className={styles.root}>
      <InputWrapper
        // initialValue={minValue}
        // forceValue={value}
        placeholder="#"
        inputType="number"
        onChange={handleChange}
        onKeyUp={handleJumpTo}
        actionSlot={<JumpToButton onClick={handleJumpTo} />}
      />
    </div>
  );
};

const JumpToButton = ({ onClick = () => {} }) => {
  return (
    <div
      data-testid="jump-to-button"
      className={styles.btn}
      role="button"
      onClick={onClick}
    >
      <IconJumpTo data-testid="jump-to-button-svg" className={styles.svg} />
    </div>
  );
};

JumpTo.propTypes = {
  forcePage: PropTypes.number,
  pageCount: PropTypes.number,
  onPageChange: PropTypes.func,
};
