import PropTypes from "prop-types";
import cn from "classnames";

// Shared
import { messages } from "shared/model";

// Styles
import styles from "./painting-details.module.scss";

export const PaintingDetails = ({ painting = {} }) => {
  const {
    title = "",
    creators = "",
    culture = "",
    creation_date = "",
    technique = "",
    creditline = "",
    accessionNumber = "",
  } = painting;

  if (Object.keys(painting).length === 0)
    return <h3 className="center-text">{messages.errorMessage.value}</h3>;

  return (
    <section className={styles.root}>
      <h1 className={styles.title}>Artwork details</h1>
      <ul className={cn(styles.list, "base-text")}>
        <li>
          <strong>Title:</strong> {title}
        </li>
        <li>
          <strong>Creator:</strong> {creators}
        </li>
        <li>
          <strong>Culture:</strong> {culture}
        </li>
        <li>
          <strong>Date:</strong> {creation_date}
        </li>
        <li>
          <strong>Technique:</strong> {technique}
        </li>
        <li>
          <strong>Credit Line:</strong> {creditline}
        </li>
        <li>
          <strong>Accession Number:</strong> {accessionNumber}
        </li>
      </ul>
    </section>
  );
};

PaintingDetails.propTypes = { painting: PropTypes.object.isRequired };
