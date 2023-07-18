import PropTypes from "prop-types";

// Redux & Store
import { useDispatch } from "react-redux";

// Features
import { PageNavigation } from "features/page-navigation";
import { JumpTo } from "features/jump-to";

// Shared
import {
  usePageCount,
  useForcePage,
  getStorageParams,
  setStorageParams,
} from "shared/lib";
import { queryCreated } from "shared/model";

export const PaintingsNavigation = ({
  paintingsTotal = 0,
  isFetching = false,
  isError = false,
  querySkip = 0,
}) => {
  const paintingsPerPage = 20;
  const dispatch = useDispatch();
  const [forcePage] = useForcePage(querySkip, paintingsPerPage);
  const [pageCount] = usePageCount(paintingsTotal, paintingsPerPage);

  const handleNavigate = (selected) => {
    const skip = selected * paintingsPerPage;
    dispatch(queryCreated({ case: "skip", skip }));

    const params = getStorageParams();
    setStorageParams({ ...params, skip });

    document.documentElement.scrollTo(0, 0);
  };

  if (isError || isFetching || pageCount === 0) return null;

  return (
    <>
      <PageNavigation
        forcePage={forcePage}
        pageCount={pageCount}
        onPageChange={({ selected }) => handleNavigate(selected)}
      />

      <JumpTo
        forcePage={forcePage}
        pageCount={pageCount}
        onPageChange={(selected) => handleNavigate(selected)}
      />
    </>
  );
};

PaintingsNavigation.propTypes = {
  paintingsTotal: PropTypes.number,
  isFetching: PropTypes.bool,
  isError: PropTypes.bool,
  querySkip: PropTypes.number,
};
