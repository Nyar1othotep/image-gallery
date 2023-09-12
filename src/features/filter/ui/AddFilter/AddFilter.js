import PropTypes from "prop-types";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { FiSearch } from "react-icons/fi";

// Entities
import { FilterWrapper } from "entities/filter";

// Shared
import { ActionButton } from "shared/ui";

import { addFilter } from "../../model/filterActions";
import styles from "./AddFilter.module.scss";

export const AddFilter = ({
  identifier = "",
  filter = {},
  onChange = () => {},
  ...props
}) => {
  const dispatch = useDispatch();

  const handleAddFilter = useCallback(() => {
    dispatch(addFilter(filter));
    // eslint-disable-next-line
  }, [filter]);

  const handleKeyUp = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      handleAddFilter();
    }
  };

  return (
    <FilterWrapper
      identifier={identifier}
      onChange={onChange}
      onKeyUp={handleAddFilter}
      actionSlot={
        <ActionSlot onClick={handleAddFilter} onKeyUp={handleKeyUp} />
      }
      {...props}
    />
  );
};

/**
 * @remark
 *
 * ActionSlot has been extracted as a separate component.
 * It's done to enhance readability and avoid excessive nesting.
 */

const ActionSlot = ({ onClick = () => {}, onKeyUp = () => {} }) => {
  return (
    <ActionButton
      onClick={onClick}
      onKeyUp={onKeyUp}
      iconSlot={<FiSearch className={styles.svg} strokeWidth={1} />}
      tabIndex={0}
      aria-label="Search by query"
    />
  );
};

AddFilter.propTypes = {
  identifier: PropTypes.string,
  filter: PropTypes.object,
  onChange: PropTypes.func,
};
