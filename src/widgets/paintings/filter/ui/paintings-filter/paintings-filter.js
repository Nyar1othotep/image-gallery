import cn from "classnames";
import { useRef, useState } from "react";

// Shared
import { useFilter } from "shared/lib";

// Model
import { searchBy, filterBy } from "../../model";

// Component
import { FilterInputsList } from "../filter-inputs-list/filter-inputs-list";
import { FilterTransitionInputs } from "../filter-transition-inputs/filter-transition-inputs";

// Styles
import styles from "./paintings-filter.module.scss";

// Svg
import { ReactComponent as IconArrow } from "shared/assets/icon_arrow.svg";

export const PaintingsFilter = () => {
  const [isFilterBy, setIsFilterBy] = useState(false);
  const filterByRef = useRef(null);
  const [filter, filterHandler] = useFilter();

  const handleFilterBy = () => {
    setIsFilterBy((isFilterBy) => !isFilterBy);
  };

  const handleKeyUp = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      handleFilterBy();
    }
  };

  return (
    <section className={styles.root}>
      <div className={styles.wrapper}>
        <h2>Search by painting name</h2>
        <FilterInputsList
          className={styles.search_by}
          inputs={searchBy}
          filter={filter}
          onChange={filterHandler}
        />
      </div>

      <div
        className={cn(
          styles.wrapper,
          isFilterBy ? styles.filter_by__active : styles.filter_by
        )}
      >
        <div
          className={styles.action_title}
          onClick={handleFilterBy}
          onKeyUp={handleKeyUp}
          tabIndex={0}
        >
          <h3>Filter by</h3>
          <IconArrow className={styles.svg} />
        </div>

        <FilterTransitionInputs
          inputs={filterBy}
          filterByRef={filterByRef}
          isAppear={isFilterBy}
          filter={filter}
          onChange={filterHandler}
        />
      </div>
    </section>
  );
};
