import { useCallback } from "react";

// Redux & Store
import { useDispatch } from "react-redux";

// Shared
import { ActionButton } from "shared/ui";

// Model
import { resetPagination } from "../../model";

// Styles
import styles from "./reset-pagination.module.scss";

export const ResetPagination = () => {
  const dispatch = useDispatch();

  const handleReset = useCallback(
    () => {
      dispatch(resetPagination());
    },
    // eslint-disable-next-line
    []
  );

  return (
    <ActionButton
      className={styles.root}
      contentSlot={<h4>Reset</h4>}
      onClick={handleReset}
    />
  );
};
