import cn from "classnames";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

// Shared
import { useBreakpoint } from "shared/lib";
import { Image } from "shared/ui";

import styles from "./ArtworkCard.module.scss";

export const ArtworkCard = ({
  id = 0,
  title = "",
  creation_date = "",
  image = "",
  creators = "",
}) => {
  const [isSmallView] = useBreakpoint(767);
  const { ref, inView } = useInView({
    rootMargin: isSmallView ? "800px" : "400px",
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <li ref={ref}>
      <Link className={styles.item} to={`artwork/${id}`}>
        <div className={cn(styles.img, "_ibg")}>
          {inView && <Image image={image} alt={title} spinner={true} />}
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

ArtworkCard.propTypes = {
  id: PropTypes.number,
  className: PropTypes.string,
  title: PropTypes.string,
  creation_date: PropTypes.string,
  image: PropTypes.object,
  creators: PropTypes.string,
};
