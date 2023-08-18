import PropTypes from "prop-types";

// Lib
import { convertToMb } from "../../lib";

export const ArtworkLink = ({ artwork = {} }) => {
  const { key = "", filename = "", url = "", filesize = "" } = artwork;

  return (
    <li>
      <a download={filename} href={url}>
        {key} <span>({convertToMb(filesize)} Mb)</span>
      </a>
    </li>
  );
};

ArtworkLink.propTypes = { artwork: PropTypes.object.isRequired };
