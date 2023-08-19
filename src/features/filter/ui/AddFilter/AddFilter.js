import PropTypes from "prop-types";
import { useCallback } from "react";
import { useDispatch } from "react-redux";

// Entities
import { FilterWrapper } from "entities/filter";

// Shared
import { ActionButton } from "shared/ui";

import { addFilter } from "../../model/filterActions";
import styles from "./AddFilter.module.scss";
import { ReactComponent as IconSearch } from "./assets/search.svg";

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

  return (
    <FilterWrapper
      identifier={identifier}
      onChange={onChange}
      onKeyUp={handleAddFilter}
      actionSlot={<ActionSlot onClick={handleAddFilter} />}
      {...props}
    />
  );
};

const ActionSlot = ({ onClick = () => {} }) => {
  return (
    <ActionButton
      onClick={onClick}
      iconSlot={<IconSearch className={styles.svg} />}
    />
  );
};

AddFilter.propTypes = {
  identifier: PropTypes.string,
  filter: PropTypes.object,
  onChange: PropTypes.func,
};