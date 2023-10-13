import PropTypes from "prop-types";
import cn from "classnames";

// Shared
import { LazyLoadImage } from "shared/ui";

import { ArtworkDropdown } from "../ArtworkDropdown/ArtworkDropdown";
import styles from "./ArtworkFull.module.scss";

export const ArtworkFull = ({ artwork = {} }) => {
  const {
    images = {},
    title = "",
    culture = "",
    creation_date = "",
    wallDescription = "",
  } = artwork;

  return (
    <section className={styles.root}>
      <div className={styles.wrapper}>
        <div className={cn(styles.image, "_ibg")}>
          <LazyLoadImage
            image={images.print}
            preview={images.web}
            alt={title}
          />
        </div>
        <ArtworkDropdown artwork={artwork} />
      </div>
      <div className={cn(styles.info, "base-text")}>
        <h1>{title}</h1>
        <p className={styles.culture}>{culture}</p>
        <p>{creation_date}</p>
        <p>{wallDescription}</p>
      </div>
    </section>
  );
};

ArtworkFull.propTypes = { artwork: PropTypes.object.isRequired };
