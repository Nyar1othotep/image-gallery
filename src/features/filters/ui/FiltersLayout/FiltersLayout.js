import cn from "classnames";
import { useRef, useState } from "react";
import { FiChevronRight } from "react-icons/fi";

// Shared
import { ActionButton } from "shared/ui";

import { searchBy, filterBy } from "../../config/filters";
import { FiltersList } from "../FiltersList/FiltersList";
import { TransitionFiltersList } from "../TransitionFiltersList/TransitionFiltersList";
import styles from "./FiltersLayout.module.scss";

export const FiltersLayout = () => {
  const [isFilterBy, setIsFilterBy] = useState(false);
  const filterByRef = useRef(null);

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
        <FiltersList className={styles.search_by} inputs={searchBy} />
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

        <TransitionFiltersList
          inputs={filterBy}
          filterByRef={filterByRef}
          isAppear={isFilterBy}
        />
      </div>
    </section>
  );
};
