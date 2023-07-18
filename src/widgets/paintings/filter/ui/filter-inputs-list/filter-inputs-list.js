import cn from "classnames";
import PropTypes from "prop-types";

// Features
import { SearchPaintings } from "features/search-paintings";

// Styles
import styles from "./filter-inputs-list.module.scss";

export const FilterInputsList = ({
  className = "",
  inputs = [],
  inputsRef = null,
  params = {},
  onChange = () => {},
}) => {
  return (
    <ul ref={inputsRef} className={cn(className, styles.root)}>
      {inputs.map(({ identifier, ...props }) => (
        <SearchPaintings
          key={identifier}
          identifier={identifier}
          params={params}
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
};
