// Entities
import { PaintingCard } from "entities/painting/painting-card";

// Shared
import { Spinner } from "shared/ui";
import { messages } from "shared/model";

// Styles
import styles from "./paintings-items.module.scss";

export const PaintingsItems = ({ data, isFetching, isError }) => {
  if (isFetching) return <Spinner />;

  if (isError)
    return <h3 className="center-text">{messages.errorMessage.value}</h3>;

  if (data.length < 1)
    return <h3 className="center-text">{messages.emptySearchMessage.value}</h3>;

  return (
    <ul className={styles.root}>
      {data.map(({ id, ...props }) => {
        return <PaintingCard key={id} id={id} {...props} />;
      })}
    </ul>
  );
};
