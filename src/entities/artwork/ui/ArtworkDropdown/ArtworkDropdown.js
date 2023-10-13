import PropTypes from "prop-types";
import cn from "classnames";
import { FiChevronRight } from "react-icons/fi";

// Shared
import { ActionButton } from "shared/ui";

import { convertToArray } from "../../lib/convertToArray";
import { ArtworkLink } from "../ArtworkLink/ArtworkLink";
import styles from "./ArtworkDropdown.module.scss";

export const ArtworkDropdown = ({ artwork = {} }) => {
  const { images = {} } = artwork;

  const imagesArray = convertToArray(images);

  return (
    <div className={cn(styles.root, "m-text")}>
      <ActionButton
        className={styles.btn}
        contentSlot={<h4>Download</h4>}
        iconSlot={<FiChevronRight className={styles.svg} />}
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

ArtworkDropdown.propTypes = { artwork: PropTypes.object.isRequired };
