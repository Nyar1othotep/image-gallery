import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

// Features
import { resetFilter } from "features/filters";

// Entities
import { ArtworkCard } from "entities/artwork";

// Shared
import { Spinner, ErrorMessage, SearchMessage, ActionButton } from "shared/ui";

import styles from "./ArtworksList.module.scss";

export const ArtworksList = ({
  artworks = [],
  isFetching = false,
  isError = false,
}) => {
  if (isFetching) return <Spinner />;

  if (isError) return <ErrorMessage />;

  if (artworks.length === 0)
    return (
      <SearchMessage className={styles.message} actionSlot={<ResetFilter />} />
    );

  return (
    <ul className={styles.root}>
      {artworks.map(({ id, ...props }) => {
        return <ArtworkCard key={id} id={id} {...props} />;
      })}
    </ul>
  );
};

const ResetFilter = () => {
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(resetFilter());
  };

  return (
    <ActionButton
      className={styles.reset}
      contentSlot={<h4>Reset search</h4>}
      onClick={handleReset}
    />
  );
};

ArtworksList.propTypes = {
  artworks: PropTypes.array,
  isFetching: PropTypes.bool,
  isError: PropTypes.bool,
};
