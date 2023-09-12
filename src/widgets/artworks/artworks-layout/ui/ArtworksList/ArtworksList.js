import PropTypes from "prop-types";

// Features
import { ResetFilter } from "features/filter";

// Entities
import { ArtworkCard } from "entities/artwork";
import { SearchMessage } from "entities/filter";

// Shared
import { Spinner, ErrorMessage } from "shared/ui";

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

ArtworksList.propTypes = {
  artworks: PropTypes.array,
  isFetching: PropTypes.bool,
  isError: PropTypes.bool,
};
