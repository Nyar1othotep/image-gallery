import PropTypes from "prop-types";
import cn from "classnames";
import ReactPaginate from "react-paginate";

// Svg
import { ReactComponent as IconArrow } from "./assets/icon_arrow.svg";

// Styles
import styles from "./page-navigation.module.scss";

export const PageNavigation = ({
  total = 0,
  itemsPerPage = 0,
  onPageChange = () => {},
}) => {
  let pageCount = 0;

  if (total !== 0 && itemsPerPage !== 0)
    pageCount = Math.ceil(total / itemsPerPage);

  return (
    <ReactPaginate
      onPageChange={onPageChange}
      pageRangeDisplayed={3}
      marginPagesDisplayed={1}
      pageCount={pageCount}
      renderOnZeroPageCount={null}
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
  );
};

PageNavigation.propTypes = {
  total: PropTypes.number,
  itemsPerPage: PropTypes.number,
  onPageChange: PropTypes.func,
};
