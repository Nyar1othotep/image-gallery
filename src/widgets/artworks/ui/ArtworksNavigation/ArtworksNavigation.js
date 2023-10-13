import cn from "classnames";
import PropTypes from "prop-types";
import ReactPaginate from "react-paginate";
import { FiChevronRight } from "react-icons/fi";
import { useDispatch } from "react-redux";

// Features
import { createFilter } from "features/filters";

// Shared
import { usePageCount } from "shared/lib";

import styles from "./ArtworksNavigation.module.scss";

export const ArtworksNavigation = ({
  artworksTotal = 0,
  forcePage = 0,
  perPage = 0,
  isFetching = false,
  isError = false,
}) => {
  const dispatch = useDispatch();
  const [pageCount] = usePageCount(artworksTotal, perPage);

  const handlePagination = (selected) => {
    dispatch(createFilter({ skip: selected }));
  };

  if (isError || isFetching || pageCount === 0) return null;

  return (
    <div className={styles.root}>
      <ReactPaginate
        onPageChange={({ selected }) => handlePagination(selected * perPage)}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        forcePage={forcePage / perPage}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
        hrefAllControls={true}
        // Previous
        previousLabel={
          <FiChevronRight className={cn(styles.svg, styles.svg_prev)} />
        }
        // Next
        nextLabel={<FiChevronRight className={styles.svg} />}
        // Break
        breakLabel="..."
        // Page
        containerClassName={styles.paginationContainer}
        // Other
        activeClassName={styles.active}
        disabledClassName={styles.disabled}
      />
    </div>
  );
};

ArtworksNavigation.propTypes = {
  artworksTotal: PropTypes.number,
  forcePage: PropTypes.number,
  perPage: PropTypes.number,
  isFetching: PropTypes.bool,
  isError: PropTypes.bool,
};
