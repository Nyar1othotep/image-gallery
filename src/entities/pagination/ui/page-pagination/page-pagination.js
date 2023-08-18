import PropTypes from "prop-types";
import cn from "classnames";
import ReactPaginate from "react-paginate";

// Shared
import { ReactComponent as IconArrow } from "shared/assets/icon_arrow.svg";

// Styles
import styles from "./page-pagination.module.scss";

export const PagePagination = ({
  forcePage = 0,
  pageCount = 0,
  onPageChange = () => {},
}) => {
  return (
    <>
      <ReactPaginate
        onPageChange={onPageChange}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        forcePage={forcePage}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
        hrefAllControls={true}
        // Previous
        previousLabel={
          <IconArrow
            data-testid="page-navigation-svg"
            className={cn(styles.svg, styles.svg_prev)}
          />
        }
        // Next
        nextLabel={
          <IconArrow data-testid="page-navigation-svg" className={styles.svg} />
        }
        // Break
        breakLabel="..."
        // Page
        containerClassName={styles.root}
        // Other
        activeClassName={styles.active}
        disabledClassName={styles.disabled}
      />
    </>
  );
};

PagePagination.propTypes = {
  forcePage: PropTypes.number,
  pageCount: PropTypes.number,
  onPageChange: PropTypes.func,
};
