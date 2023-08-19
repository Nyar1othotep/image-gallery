import PropTypes from "prop-types";
import cn from "classnames";

// Features
import { ReloadPage } from "features/error";

// Entities
import { ErrorMessage } from "entities/error";

// Shared
import { LazyLoadImage } from "shared/ui";

// Styles
import styles from "./ArtworkFull.module.scss";

export const ArtworkFull = ({ artwork = {}, actionSlot }) => {
  const {
    images = {},
    title = "",
    culture = "",
    creation_date = "",
    wallDescription = "",
  } = artwork;

  if (Object.keys(artwork).length === 0)
    return <ErrorMessage actionSlot={<ReloadPage />} />;

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
        {actionSlot && actionSlot}
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

ArtworkFull.propTypes = {
  artwork: PropTypes.object.isRequired,
  actionSlot: PropTypes.any,
};
