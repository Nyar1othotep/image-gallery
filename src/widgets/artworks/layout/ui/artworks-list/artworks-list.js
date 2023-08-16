import PropTypes from "prop-types";

// Entities
import { ArtworkCard } from "entities/artwork";

// Shared
import { Spinner } from "shared/ui";
import { messages } from "shared/model";

// Styles
import styles from "./artworks-list.module.scss";
import { ResetPagination } from "features/pagination";

export const ArtworksList = ({
  artworks = [],
  isFetching = false,
  isError = false,
}) => {
  if (isFetching) return <Spinner />;

  if (isError)
    return <h3 className="center-text">{messages.errorMessage.value}</h3>;

  if (artworks.length === 0)
    return <h3 className="center-text">{messages.emptySearchMessage.value}</h3>;

  return (
    <>
      <ResetPagination />
      <ul className={styles.root}>
        {artworks.map(({ id, ...props }) => {
          return <ArtworkCard key={id} id={id} {...props} />;
        })}
      </ul>
    </>
  );
};

ArtworksList.propTypes = {
  artworks: PropTypes.array,
  isFetching: PropTypes.bool,
  isError: PropTypes.bool,
};
