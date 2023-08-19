import PropTypes from "prop-types";
import { useCallback } from "react";

// Redux & Store
import { useDispatch, useSelector } from "react-redux";

// Entities
import { PagePagination } from "entities/pagination";

// Model
import { addSkipAndPage } from "../../model";

export const SelectPage = ({ pageCount = 0 }) => {
  const dispatch = useDispatch();
  const { page, perPage } = useSelector((state) => state.page);

  const handleSelect = useCallback(
    (selected) => {
      const skip = selected * perPage;
      const page = selected + 1;
      dispatch(addSkipAndPage({ skip, page }));

      document.documentElement.scrollTo(0, 0);
    },
    // eslint-disable-next-line
    [perPage]
  );

  return (
    <PagePagination
      pageCount={pageCount}
      forcePage={page - 1}
      onPageChange={({ selected }) => handleSelect(selected)}
    />
  );
};

SelectPage.propTypes = { pageCount: PropTypes.number };
