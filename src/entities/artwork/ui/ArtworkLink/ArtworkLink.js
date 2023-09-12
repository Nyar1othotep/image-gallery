import PropTypes from "prop-types";

import { convertToMb } from "../../lib/convertToMb";
import styles from "./ArtworkLink.module.scss";

export const ArtworkLink = ({ artwork = {} }) => {
  const { key = "", filename = "", url = "", filesize = "" } = artwork;

  return (
    <li>
      <a className={styles.link} download={filename} href={url}>
        {key} <span className={styles.size}>({convertToMb(filesize)} Mb)</span>
      </a>
    </li>
  );
};

ArtworkLink.propTypes = { artwork: PropTypes.object.isRequired };
