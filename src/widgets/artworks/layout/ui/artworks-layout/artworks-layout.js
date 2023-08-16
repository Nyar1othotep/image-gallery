// Redux & Store
import { useSelector } from "react-redux";

// Entities
import { useGetArtworksQuery } from "entities/artwork";

// Component
import { ArtworksList } from "../artworks-list/artworks-list";
import { ArtworksNavigation } from "../artworks-navigation/artworks-navigation";

// Styles
import styles from "./artworks-layout.module.scss";

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
