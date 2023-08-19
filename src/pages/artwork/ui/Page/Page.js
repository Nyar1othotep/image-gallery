import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

// Features
import { DownloadArtwork } from "features/artwork";
import { ReloadPage } from "features/error";

// Entities
import {
  useGetArtworkQuery,
  ArtworkFull,
  ArtworkDetails,
} from "entities/artwork";
import { ErrorMessage } from "entities/error";

// Shared
import { Spinner } from "shared/ui";

// Styles
import styles from "./Page.module.scss";

export const ArtworkDetailsPage = () => {
  const { artworkId } = useParams();
  const { data = {}, isFetching, isError } = useGetArtworkQuery(artworkId);

  const { data: artwork = {} } = data;

  if (isFetching) return <Spinner />;

  if (isError) return <ErrorMessage actionSlot={<ReloadPage />} />;

  return (
    <main className={styles.root}>
      <Helmet>
        <title>Image Gallery - {artwork.title}</title>
        <meta
          name="description"
          content={"Artwork description page - " + artwork.title}
        />
      </Helmet>

      <ArtworkFull
        artwork={artwork}
        actionSlot={<DownloadArtwork artwork={artwork} />}
      />

      <ArtworkDetails artwork={artwork} />
    </main>
  );
};
