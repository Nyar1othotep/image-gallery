import PropTypes from "prop-types";

// Entities
import { PaintingCard } from "entities/painting";

// Shared
import { Spinner } from "shared/ui";
import { messages } from "shared/model";

// Styles
import styles from "./paintings-list.module.scss";

export const PaintingsList = ({ paintings, isFetching, isError }) => {
  if (isFetching) return <Spinner />;

  if (isError)
    return <h3 className="center-text">{messages.errorMessage.value}</h3>;

  if (paintings.length === 0)
    return <h3 className="center-text">{messages.emptySearchMessage.value}</h3>;

  return (
    <ul className={styles.root}>
      {paintings.map(({ id, ...props }) => {
        return <PaintingCard key={id} id={id} {...props} />;
      })}
    </ul>
  );
};

PaintingsList.propTypes = {
  paintings: PropTypes.array,
  isFetching: PropTypes.bool,
  isError: PropTypes.bool,
};
