import cn from "classnames";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

// Lib
import { useImage, useImageObserver } from "../../lib";

// Assets
import imgNotFound from "./assets/not-found.jpg";

// Styles
import styles from "./painting-card.module.scss";

export const PaintingCard = ({
  className = "",
  id = 0,
  title = "",
  creation_date = "",
  image = "",
  creators = "",
}) => {
  const navigate = useNavigate();
  const [imageState, setImageState] = useImage(image);
  const [containerRef, onView] = useImageObserver({
    root: null,
    rootMargin: "400px",
    threshold: 0,
    triggerOnce: true,
  });

  const handleClick = () => {
    navigate(`/painting/${id}`);
  };

  const onImageError = () => {
    setImageState((imageState) => imgNotFound);
  };

  return (
    <li
      data-testid="painting-card"
      ref={containerRef}
      className={cn(styles.root, className)}
    >
      <div className={styles.item} onClick={handleClick}>
        <div className={cn(styles.img, "_ibg")}>
          {onView && (
            <img
              src={imageState}
              width="370px"
              height="308px"
              alt={title}
              onError={onImageError}
            />
          )}
        </div>
        <div className={styles.info}>
          <h4 className={styles.title}>{title}</h4>
          <div className={cn(styles.create, "xs-text")}>
            {creators + ", " + creation_date}
          </div>
        </div>
      </div>
    </li>
  );
};

PaintingCard.propTypes = {
  id: PropTypes.number,
  className: PropTypes.string,
  title: PropTypes.string,
  creation_date: PropTypes.string,
  image: PropTypes.string,
  creators: PropTypes.string,
};
