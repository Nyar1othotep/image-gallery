import PropTypes from "prop-types";
import { useState } from "react";
import cn from "classnames";

// Features
import { Search } from "features/search/search";

// Styles
import styles from "./paintings-inputs.module.scss";

export const PaintingsInputs = ({ data = {}, onSearch = () => {} }) => {
  const [value, setValue] = useState("");

  const { identifier, placeholder } = data;

  const handleChange = (e) => {
    setValue((value) => e.target.value);
  };

  return (
    <div className={styles.root}>
      <input
        data-testid="paintings-input"
        className={cn(styles.input, "xs-text collapse-text")}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onKeyPress={(e) => {
          if (e.key === "Enter") onSearch(identifier, value);
        }}
      />
      <Search
        className={styles.search}
        onClick={() => onSearch(identifier, value)}
      />
    </div>
  );
};

PaintingsInputs.propTypes = { data: PropTypes.object, onClick: PropTypes.func };
