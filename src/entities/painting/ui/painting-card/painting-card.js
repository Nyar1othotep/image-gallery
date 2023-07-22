import cn from "classnames";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Shared
import { Image } from "shared/ui";

// Lib
import { useImageObserver } from "../../lib";

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
  const [containerRef, onView] = useImageObserver({
    root: null,
    rootMargin: "200px",
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <li
      data-testid="painting-card"
      ref={containerRef}
      className={cn(styles.root, className)}
    >
      <Link className={styles.item} to={`painting/${id}`}>
        <div className={cn(styles.img, "_ibg")}>
          {onView && <Image image={image} alt={title} spinner={true} />}
        </div>
        <div className={styles.info}>
          <h4 className={styles.title}>{title}</h4>
          <div className={cn(styles.create, "xs-text")}>
            {creators + ", " + creation_date}
          </div>
        </div>
      </Link>
    </li>
  );
};

PaintingCard.propTypes = {
  id: PropTypes.number,
  className: PropTypes.string,
  title: PropTypes.string,
  creation_date: PropTypes.string,
  image: PropTypes.object,
  creators: PropTypes.string,
};
