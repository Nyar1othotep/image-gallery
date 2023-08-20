import PropTypes from "prop-types";
import { useSelector } from "react-redux";

// Features
import { SelectPage, GoToPage } from "features/pagination";

// Entities
import { usePageCount } from "entities/pagination";

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
      <SelectPage pageCount={pageCount} />
      <GoToPage pageCount={pageCount} />
    </>
  );
};

ArtworksNavigation.propTypes = {
  artworksTotal: PropTypes.number,
  isFetching: PropTypes.bool,
  isError: PropTypes.bool,
};
