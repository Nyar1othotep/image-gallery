import PropTypes from "prop-types";
import { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

// Entities
import { FilterWrapper } from "entities/filter";

// Shared
import { ActionButton } from "shared/ui";

import { addSkipAndPage } from "../../model/paginationActions";
import styles from "./GoToPage.module.scss";
import { ReactComponent as IconGoToPage } from "./assets/arrow.svg";

export const GoToPage = ({ pageCount = 0 }) => {
  const minValue = 1;
  const dispatch = useDispatch();
  const { page, perPage } = useSelector((state) => state.page);
  const [value, setValue] = useState(minValue);

  const handleChange = (val) => {
    setValue((value) => val);
  };

  const handleGoToPage = useCallback(
    () => {
      if (value < minValue || value > pageCount) {
        alert("Please enter a valid value");
      } else {
        const skip = (value - 1) * perPage;
        dispatch(addSkipAndPage({ skip, page: value }));

        document.documentElement.scrollTo(0, 0);
      }
    },
    // eslint-disable-next-line
    [value, perPage]
  );

  const handleKeyUp = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      handleGoToPage();
    }
  };

  return (
    <div className={styles.root}>
      <FilterWrapper
        initialValue={minValue}
        forceValue={page}
        placeholder="#"
        inputType="number"
        onChange={handleChange}
        onKeyUp={handleGoToPage}
        actionSlot={
          <ActionSlot onClick={handleGoToPage} onKeyUp={handleKeyUp} />
        }
      />
    </div>
  );
};

const ActionSlot = ({ onClick = () => {}, onKeyUp = () => {} }) => {
  return (
    <ActionButton
      onClick={onClick}
      onKeyUp={onKeyUp}
      iconSlot={<IconGoToPage className={styles.svg} />}
      tabIndex={0}
      aria-label="Go to page"
    />
  );
};

GoToPage.propTypes = { pageCount: PropTypes.number };
