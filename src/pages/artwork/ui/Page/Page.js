import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

// Entities
import {
  useGetArtworkQuery,
  ArtworkFull,
  ArtworkDetails,
} from "entities/artwork";

// Shared
import { Spinner, ErrorMessage } from "shared/ui";

import styles from "./Page.module.scss";

export const ArtworkDetailsPage = () => {
  const { artworkId } = useParams();
  const { data = {}, isFetching, isError } = useGetArtworkQuery(artworkId);

  const { data: artwork = {} } = data;

  if (isFetching) return <Spinner />;

  if (isError) return <ErrorMessage />;

  return (
    <main className={styles.root}>
      <Helmet>
        <title>Image Gallery - {artwork.title}</title>
        <meta
          name="description"
          content={"Artwork description page - " + artwork.title}
        />
      </Helmet>

      <ArtworkFull artwork={artwork} />

      <ArtworkDetails artwork={artwork} />
    </main>
  );
};
