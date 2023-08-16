import cn from "classnames";
import PropTypes from "prop-types";

// Features
import { AddFilter } from "features/filter";

// Styles
import styles from "./filter-inputs-list.module.scss";

export const FilterInputsList = ({
  className = "",
  inputs = [],
  inputsRef = null,
  filter = {},
  onChange = () => {},
}) => {
  return (
    <ul ref={inputsRef} className={cn(className, styles.root)}>
      {inputs.map(({ identifier, ...props }) => (
        <AddFilter
          key={identifier}
          identifier={identifier}
          filter={filter}
          onChange={onChange}
          {...props}
        />
      ))}
    </ul>
  );
};

FilterInputsList.propTypes = {
  className: PropTypes.string,
  inputs: PropTypes.array,
  inputsRef: PropTypes.any,
  filter: PropTypes.object,
  onChange: PropTypes.func,
};
