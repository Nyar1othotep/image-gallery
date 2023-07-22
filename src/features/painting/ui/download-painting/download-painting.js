import PropTypes from "prop-types";
import cn from "classnames";

// Styles
import styles from "./download-painting.module.scss";

export const DownloadPainting = ({ painting = {} }) => {
  const { fullImage = {} } = painting;

  if (Object.keys(painting).length === 0) return null;

  return (
    <a className={cn(styles.root, "m-text")} href={fullImage.url} download>
      Download full version
    </a>
  );
};

DownloadPainting.propTypes = { painting: PropTypes.object.isRequired };
