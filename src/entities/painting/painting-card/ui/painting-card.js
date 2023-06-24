import cn from "classnames";
import PropTypes from "prop-types";

// Assets
import imgNotFound from "../assets/not-found.jpg";

// Styles
import styles from "./painting-card.module.scss";

export const PaintingCard = ({
  className = "",
  onClick = () => {},
  id = 0,
  title = "",
  creation_date = "",
  images = {},
  creators = "",
}) => {
  const image = images?.web?.url ?? imgNotFound;

  return (
    <li data-testid="painting-card" className={cn(styles.root, className)}>
      <div className={styles.item} onClick={() => onClick(id)}>
        <div className={cn(styles.img, "_ibg")}>
          <img
            src={image}
            alt={title}
            onError={(e) => (e.target.src = imgNotFound)}
          />
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
  onClick: PropTypes.func,
  id: PropTypes.number,
  className: PropTypes.string,
  title: PropTypes.string,
  creation_date: PropTypes.string,
  images: PropTypes.object,
  creators: PropTypes.string,
};
