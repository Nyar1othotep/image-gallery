import PropTypes from "prop-types";
import { useSelector } from "react-redux";

// Features
import { SelectPage, GoToPage } from "features/pagination";

// Entities
import { usePageCount } from "entities/pagination";

import styles from "./ArtworksNavigation.module.scss";

export const ArtworksNavigation = ({
  artworksTotal = 0,
  isFetching = false,
  isError = false,
}) => {
  const perPage = useSelector((state) => state.page.perPage);
  const [pageCount] = usePageCount(artworksTotal, perPage);

  if (isError || isFetching || pageCount === 0) return null;

  return (
    <>
      <SelectPage className={styles.select} pageCount={pageCount} />
      <GoToPage className={styles.goto} pageCount={pageCount} />
    </>
  );
};

ArtworksNavigation.propTypes = {
  artworksTotal: PropTypes.number,
  isFetching: PropTypes.bool,
  isError: PropTypes.bool,
};
