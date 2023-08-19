import { useSelector } from "react-redux";

// Entities
import { useGetArtworksQuery } from "entities/artwork";

import { ArtworksList } from "../ArtworksList/ArtworksList";
import { ArtworksNavigation } from "../ArtworksNavigation/ArtworksNavigation";
import styles from "./ArtworksLayout.module.scss";

export const ArtworksLayout = () => {
  const filter = useSelector((state) => state.filter.filter);
  const perPage = useSelector((state) => state.page.perPage);

  const {
    data = {},
    isFetching,
    isError,
  } = useGetArtworksQuery({ filter, perPage });

  const { data: artworks = [], total: artworksTotal = 0 } = data;

  return (
    <section className={styles.root}>
      <ArtworksList
        artworks={artworks}
        isFetching={isFetching}
        isError={isError}
      />

      <ArtworksNavigation
        artworksTotal={artworksTotal}
        isFetching={isFetching}
        isError={isError}
      />
    </section>
  );
};
