import PropTypes from "prop-types";
import { useCallback } from "react";

// Redux & Store
import { useDispatch } from "react-redux";

// Entities
import { InputWrapper } from "entities/input";

// Model
import { searchPaintings } from "../model";

// Styles
import styles from "./search-paintings.module.scss";

// Svg
import { ReactComponent as IconSearch } from "./assets/search.svg";

export const SearchPaintings = ({
  identifier = "",
  params = {},
  onChange = () => {},
  ...props
}) => {
  const dispatch = useDispatch();

  const handleSearch = useCallback(() => {
    dispatch(searchPaintings(params));
    // eslint-disable-next-line
  }, [params]);

  return (
    <InputWrapper
      identifier={identifier}
      onChange={onChange}
      onKeyUp={handleSearch}
      actionSlot={<SearchButton onClick={handleSearch} />}
      {...props}
    />
  );
};

const SearchButton = ({ onClick = () => {} }) => {
  return (
    <div
      data-testid="search-button"
      className={styles.btn}
      role="button"
      onClick={onClick}
    >
      <IconSearch data-testid="search-button-svg" className={styles.svg} />
    </div>
  );
};

SearchPaintings.propTypes = {
  identifier: PropTypes.string,
  params: PropTypes.object,
  onChange: PropTypes.func,
};
