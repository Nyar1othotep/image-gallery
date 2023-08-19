import { useCallback } from "react";

// Redux & Store
import { useDispatch } from "react-redux";

// Shared
import { ActionButton } from "shared/ui";

// Model
import { resetFilters } from "../../model";

// Styles
import styles from "./ResetFilter.module.scss";

export const ResetFilter = () => {
  const dispatch = useDispatch();

  const handleReset = useCallback(
    () => {
      dispatch(resetFilters());
    },
    // eslint-disable-next-line
    []
  );

  return (
    <ActionButton
      className={styles.root}
      contentSlot={<h4>Reset search</h4>}
      onClick={handleReset}
    />
  );
};
