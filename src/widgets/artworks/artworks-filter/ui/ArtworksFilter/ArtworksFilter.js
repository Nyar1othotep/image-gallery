import cn from "classnames";
import { useRef, useState } from "react";
import { FiChevronRight } from "react-icons/fi";

// Entities
import { useFilter } from "entities/filter";

// Shared
import { ActionButton } from "shared/ui";

import { searchBy, filterBy } from "../../model/filters";
import { FilterInputsList } from "../FilterInputsList/FilterInputsList";
import { FilterTransitionInputs } from "../FilterTransitionInputs/FilterTransitionInputs";
import styles from "./ArtworksFilter.module.scss";

export const ArtworksFilter = () => {
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
        <h2>Search by artwork name</h2>
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
        <ActionButton
          className={styles.action_title}
          contentSlot={<h3>Filter by</h3>}
          iconSlot={<FiChevronRight className={styles.svg} />}
          onClick={handleFilterBy}
          onKeyUp={handleKeyUp}
          tabIndex={0}
          aria-label="Show more filters"
        />

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
