import cn from "classnames";
import { useRef, useState } from "react";

// Shared
import { ReactComponent as IconArrow } from "shared/assets/icon_arrow.svg"; // Shared
import { useParams } from "shared/lib";

// Model
import { searchBy, filterBy } from "../../model";

// Component
import { FilterInputsList } from "../filter-inputs-list/filter-inputs-list";
import { FilterTransitionInputs } from "../filter-transition-inputs/filter-transition-inputs";

// Styles
import styles from "./paintings-filter.module.scss";

export const PaintingsFilter = () => {
  const [isFilterBy, setIsFilterBy] = useState(false);
  const filterByRef = useRef(null);
  const [params, paramsHandler] = useParams();

  const handleFilterBy = () => {
    setIsFilterBy((isFilterBy) => !isFilterBy);
  };

  return (
    <section className={styles.root}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Search by painting name</h2>
        <FilterInputsList
          className={styles.search_by}
          inputs={searchBy}
          params={params}
          onChange={paramsHandler}
        />
      </div>
      <div
        className={cn(
          styles.wrapper,
          isFilterBy ? styles.filter_by__active : styles.filter_by
        )}
      >
        <div
          data-testid="title-row"
          className={styles.title_row}
          onClick={handleFilterBy}
        >
          <h3>Filter by</h3>
          <IconArrow className={styles.svg} />
        </div>

        <FilterTransitionInputs
          inputs={filterBy}
          filterByRef={filterByRef}
          isAppear={isFilterBy}
          params={params}
          onChange={paramsHandler}
        />
      </div>
    </section>
  );
};
