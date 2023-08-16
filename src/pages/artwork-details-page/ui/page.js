import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

// Features
import { DownloadArtwork } from "features/artwork";

// Entities
import {
  useGetArtworkQuery,
  ArtworkFull,
  ArtworkDetails,
} from "entities/artwork";

// Shared
import { Spinner } from "shared/ui";
import { messages } from "shared/model";

// Styles
import styles from "./page.module.scss";

export const ArtworkDetailsPage = () => {
  const { artworkId } = useParams();
  const { data = {}, isFetching, isError } = useGetArtworkQuery(artworkId);

  const { data: artwork = {} } = data;

  if (isFetching) return <Spinner />;

  if (isError)
    return <h3 className="center-text">{messages.errorMessage.value}</h3>;

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
