import PropTypes from "prop-types";
import { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiArrowRight } from "react-icons/fi";
import cn from "classnames";

// Entities
import { FilterWrapper } from "entities/filter";

// Shared
import { ActionButton } from "shared/ui";

import { addSkipAndPage } from "../../model/paginationActions";
import styles from "./GoToPage.module.scss";

export const GoToPage = ({ className = "", pageCount = 0 }) => {
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
    <div className={cn(styles.root, className)}>
      <FilterWrapper
        initialValue={minValue}
        forceValue={page}
        placeholder="Enter page"
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

/**
 * @remark
 *
 * ActionSlot has been extracted as a separate component.
 * It's done to improve readability and avoid excessive nesting.
 */

const ActionSlot = ({ onClick = () => {}, onKeyUp = () => {} }) => {
  return (
    <ActionButton
      onClick={onClick}
      onKeyUp={onKeyUp}
      iconSlot={<FiArrowRight className={styles.svg} strokeWidth={1} />}
      tabIndex={0}
      aria-label="Go to page"
    />
  );
};

GoToPage.propTypes = {
  className: PropTypes.string,
  pageCount: PropTypes.number,
};
