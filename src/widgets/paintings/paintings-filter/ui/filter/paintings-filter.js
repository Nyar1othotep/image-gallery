// Redux & Store
import { useDispatch } from "react-redux";

// Shared
import { queryCreated, queryDeleted } from "shared/model";

// Model
import { searchBy, filterBy } from "../../model/filters";

// Component
import { PaintingsInputs } from "../inputs/paintings-inputs";

// Styles
import styles from "./paintings-filter.module.scss";

export const PaintingsFilter = () => {
  const dispatch = useDispatch();

  const handleSearch = (identifier, value) => {
    const trimmedValue = value.trim();

    trimmedValue
      ? dispatch(queryCreated({ key: identifier, value }))
      : dispatch(queryDeleted(identifier));
  };

  return (
    <div className={styles.root}>
      <div>
        <h2 className={styles.title}>Search by painting name</h2>
        <div>
          {searchBy.map((data) => (
            <PaintingsInputs
              key={data.identifier}
              data={data}
              onSearch={handleSearch}
            />
          ))}
        </div>
      </div>
      <div>
        <h3 className={styles.title}>Filter by</h3>
        <div className={styles.row}>
          {filterBy.map((data) => (
            <PaintingsInputs
              key={data.identifier}
              data={data}
              onSearch={handleSearch}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
