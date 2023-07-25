import PropTypes from "prop-types";
import cn from "classnames";

// Shared
import { ActionButton } from "shared/ui";
import { ReactComponent as IconArrow } from "shared/assets/icon_arrow.svg";

// Lib
import { convertObjectToArray, convertToMb } from "../../lib";

// Styles
import styles from "./download-painting.module.scss";

export const DownloadPainting = ({ painting = {} }) => {
  const imagesArray = convertObjectToArray(painting.images);

  if (Object.keys(painting).length === 0 && imagesArray.length === 0)
    return null;

  return (
    <div className={cn(styles.root, "m-text")}>
      <ActionButton
        className={styles.btn}
        contentSlot={<h4>Download</h4>}
        iconSlot={<IconArrow className={styles.svg} />}
      />
      <ul className={styles.dropdown}>
        {imagesArray.map((item) => {
          return (
            <li key={item.key}>
              <a href={item.url} download>
                {item.key} <span>({convertToMb(item.filesize)} Mb)</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

DownloadPainting.propTypes = { painting: PropTypes.object.isRequired };
