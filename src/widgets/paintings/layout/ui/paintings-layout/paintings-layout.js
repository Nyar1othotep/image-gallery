// Redux & Store
import { useSelector } from "react-redux";

// Entities
import { useGetPaintingsQuery } from "entities/painting";

// Component
import { PaintingsList } from "../paintings-list/paintings-list";
import { PaintingsNavigation } from "../paintings-navigation/paintings-navigation";

// Styles
import styles from "./paintings-layout.module.scss";

export const PaintingsLayout = () => {
  const filter = useSelector((state) => state.filter.filter);

  const { data = {}, isFetching, isError } = useGetPaintingsQuery(filter);

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
      />
    </section>
  );
};
