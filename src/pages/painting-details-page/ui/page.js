import { useParams } from "react-router-dom";

// Features
import { DownloadPainting } from "features/painting";

// Entities
import {
  useGetPaintingQuery,
  PaintingFull,
  PaintingDetails,
} from "entities/painting";

// Shared
import { Spinner } from "shared/ui";
import { messages } from "shared/model";

// Styles
import styles from "./page.module.scss";

export const PaintingDetailsPage = () => {
  const { paintingId } = useParams();
  const { data = {}, isFetching, isError } = useGetPaintingQuery(paintingId);

  const { data: painting = {} } = data;

  if (isFetching) return <Spinner />;

  if (isError)
    return <h3 className="center-text">{messages.errorMessage.value}</h3>;

  return (
    <div className={styles.root}>
      <PaintingFull
        painting={painting}
        actionSlot={<DownloadPainting painting={painting} />}
      />

      <PaintingDetails painting={painting} />
    </div>
  );
};
