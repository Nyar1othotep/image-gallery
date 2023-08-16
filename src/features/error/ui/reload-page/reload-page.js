// Shared
import { ActionButton } from "shared/ui";

// Styles
import styles from "./reload-page.module.scss";

export const ReloadPage = () => {
  const handleReload = () => {
    localStorage.clear();
    window.location.reload(false);
  };

  return (
    <ActionButton
      className={styles.root}
      contentSlot={<h4>Reload page</h4>}
      onClick={handleReload}
    />
  );
};
