import PropTypes from "prop-types";

// Features
import { ResetFilter } from "features/filter";
import { ReloadPage } from "features/error";

// Entities
import { ArtworkCard } from "entities/artwork";
import { EmptySearchMessage } from "entities/filter";
import { ErrorMessage } from "entities/error";

// Shared
import { Spinner } from "shared/ui";

// Styles
import styles from "./ArtworksList.module.scss";

export const ArtworksList = ({
  artworks = [],
  isFetching = false,
  isError = false,
}) => {
  if (isFetching) return <Spinner />;

  if (isError) return <ErrorMessage actionSlot={<ReloadPage />} />;

  if (artworks.length === 0)
    return <EmptySearchMessage actionSlot={<ResetFilter />} />;

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
