import PropTypes from "prop-types";

// Features
import { ResetFilter } from "features/filter";

// Entities
import { ArtworkCard } from "entities/artwork";
import { EmptySearch } from "entities/filter";

// Shared
import { Spinner } from "shared/ui";
import { messages } from "shared/model";

// Styles
import styles from "./artworks-list.module.scss";

export const ArtworksList = ({
  artworks = [],
  isFetching = false,
  isError = false,
}) => {
  if (isFetching) return <Spinner />;

  if (isError)
    return <h3 className="center-text">{messages.errorMessage.value}</h3>;

  if (artworks.length === 0)
    return <EmptySearch actionSlot={<ResetFilter />} />;

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
