// Redux & Store
import { useSelector } from "react-redux";

// Shared
import { typicodeApi } from "shared/api";

// Component
import { PaintingsList } from "../paintings-list/paintings-list";
import { PaintingsNavigation } from "../paintings-navigation/paintings-navigation";

// Styles
import styles from "./paintings-layout.module.scss";

export const PaintingsLayout = () => {
  const query = useSelector((state) => state.query.query);
  const {
    data = {},
    isFetching,
    isError,
  } = typicodeApi.useGetPaintingsQuery(query);

  const { data: paintings = [], total: paintingsTotal = 0 } = data;

  return (
    <section className={styles.root}>
      <PaintingsList
        paintings={paintings}
        isFetching={isFetching}
        isError={isError}
      />

      <PaintingsNavigation
        paintingsTotal={paintingsTotal}
        isFetching={isFetching}
        isError={isError}
        querySkip={query.skip}
      />
    </section>
  );
};
