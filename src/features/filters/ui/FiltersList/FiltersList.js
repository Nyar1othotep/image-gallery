import cn from "classnames";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import { createFilter } from "../../model/slice";
import { FilterWrapper } from "../FilterWrapper/FilterWrapper";
import styles from "./FiltersList.module.scss";

export const FiltersList = ({
  className = "",
  inputs = [],
  inputsRef = null,
}) => {
  const dispatch = useDispatch();

  const handleFilter = (filter) => {
    dispatch(createFilter(filter));
  };

  return (
    <ul ref={inputsRef} className={cn(className, styles.root)}>
      {inputs.map(({ identifier, ...props }) => (
        <FilterWrapper
          key={identifier}
          identifier={identifier}
          onChange={(value) => handleFilter({ [identifier]: value })}
          {...props}
        />
      ))}
    </ul>
  );
};

FiltersList.propTypes = {
  className: PropTypes.string,
  inputs: PropTypes.array,
  inputsRef: PropTypes.any,
  onChange: PropTypes.func,
};
