import PropTypes from "prop-types";
import cn from "classnames";

// Features
import { ReloadPage } from "features/error";

// Entities
import { ErrorMessage } from "entities/error";

// Styles
import styles from "./artwork-details.module.scss";

export const ArtworkDetails = ({ artwork = {} }) => {
  const {
    title = "",
    creators = "",
    culture = "",
    creation_date = "",
    technique = "",
    creditline = "",
    accessionNumber = "",
  } = artwork;

  if (Object.keys(artwork).length === 0)
    return <ErrorMessage actionSlot={<ReloadPage />} />;

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

ArtworkDetails.propTypes = { artwork: PropTypes.object.isRequired };
