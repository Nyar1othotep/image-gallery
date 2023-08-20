import { useDispatch } from "react-redux";

// Shared
import { ActionButton } from "shared/ui";

import { resetFilters } from "../../model/filterActions";
import styles from "./ResetFilter.module.scss";

export const ResetFilter = () => {
  const dispatch = useDispatch();

  // In this case, useCallback is not used
  // because this function doesn't take any input values.
  const handleReset = () => {
    dispatch(resetFilters());
  };

  return (
    <ActionButton
      className={styles.root}
      contentSlot={<h4>Reset search</h4>}
      onClick={handleReset}
    />
  );
};
