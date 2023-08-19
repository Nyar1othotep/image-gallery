import PropTypes from "prop-types";
import { useState, useCallback } from "react";

// Redux & Store
import { useDispatch, useSelector } from "react-redux";

// Entities
import { FilterWrapper } from "entities/filter";

// Shared
import { ActionButton } from "shared/ui";

// Model
import { addSkipAndPage } from "../../model/paginationActions";

// Styles
import styles from "./GoToPage.module.scss";

// Svg
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

  return (
    <div className={styles.root}>
      <FilterWrapper
        initialValue={minValue}
        forceValue={page}
        placeholder="#"
        inputType="number"
        onChange={handleChange}
        onKeyUp={handleGoToPage}
        actionSlot={<ActionSlot onClick={handleGoToPage} />}
      />
    </div>
  );
};

const ActionSlot = ({ onClick = () => {} }) => {
  return (
    <ActionButton
      onClick={onClick}
      iconSlot={<IconGoToPage className={styles.svg} />}
    />
  );
};

GoToPage.propTypes = { pageCount: PropTypes.number };
