import PropTypes from "prop-types";

// Redux & Store
import { useSelector } from "react-redux";

// Features
import { SelectPage, GoToPage } from "features/pagination";

// Shared
import { usePageCount } from "shared/lib";

export const PaintingsNavigation = ({
  paintingsTotal = 0,
  isFetching = false,
  isError = false,
}) => {
  const perPage = useSelector((state) => state.page.perPage);
  const [pageCount] = usePageCount(paintingsTotal, perPage);

  if (isError || isFetching || pageCount === 0) return null;

  return (
    <>
      <SelectPage pageCount={pageCount} />
      <GoToPage pageCount={pageCount} />
    </>
  );
};

PaintingsNavigation.propTypes = {
  paintingsTotal: PropTypes.number,
  isFetching: PropTypes.bool,
  isError: PropTypes.bool,
};
