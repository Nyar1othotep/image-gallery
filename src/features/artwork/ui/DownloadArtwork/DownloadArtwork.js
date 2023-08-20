import PropTypes from "prop-types";
import cn from "classnames";

// Entities
import { ArtworkLink, convertToArray } from "entities/artwork";

// Shared
import { ActionButton } from "shared/ui";
import { ReactComponent as IconArrow } from "shared/assets/icon_arrow.svg";

import styles from "./DownloadArtwork.module.scss";

export const DownloadArtwork = ({ artwork = {} }) => {
  const imagesArray = convertToArray(artwork.images);

  if (Object.keys(artwork).length === 0 && imagesArray.length === 0)
    return null;

  return (
    <div className={cn(styles.root, "m-text")}>
      <ActionButton
        className={styles.btn}
        contentSlot={<h4>Download</h4>}
        iconSlot={<IconArrow className={styles.svg} />}
        aria-label="Show list of artworks for download"
      />
      <ul className={styles.dropdown}>
        {imagesArray.map((artwork) => (
          <ArtworkLink key={artwork.key} artwork={artwork} />
        ))}
      </ul>
    </div>
  );
};

DownloadArtwork.propTypes = { artwork: PropTypes.object.isRequired };
