// Redux & Store
import { useSelector, useDispatch } from "react-redux";

// Features
import { PageNavigation } from "features/page-navigation/page-navigation";

// Shared
import { typicodeApi } from "shared/api";
import { queryCreated } from "shared/model";
// import { createMockServer } from "shared/lib/server";

// Component
import { PaintingsItems } from "../items/paintings-items";

// Styles
import styles from "./paintings-list.module.scss";

// if (process.env.NODE_ENV === "development") {
//   createMockServer();
// }

export const PaintingsList = () => {
  const itemsPerPage = 20;
  const dispatch = useDispatch();
  const query = useSelector((state) => state.query.query);
  const {
    data = {},
    isFetching,
    isError,
  } = typicodeApi.useGetPaintingsQuery(query);

  const handleNavigate = (selectedPage) =>
    dispatch(queryCreated({ key: "skip", value: selectedPage }));

  return (
    <div className={styles.root}>
      <PaintingsItems
        data={data?.data}
        isFetching={isFetching}
        isError={isError}
      />

      <PageNavigation
        total={data.info?.total}
        itemsPerPage={itemsPerPage}
        onPageChange={(e) => handleNavigate(e.selected * itemsPerPage)}
      />
    </div>
  );
};
