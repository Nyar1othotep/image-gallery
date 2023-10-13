import { useSelector } from "react-redux";

// Entities
import { useGetArtworksQuery } from "entities/artwork";

import { ArtworksList } from "../ArtworksList/ArtworksList";
import { ArtworksNavigation } from "../ArtworksNavigation/ArtworksNavigation";

export const ArtworksLayout = () => {
  const filter = useSelector((state) => state.filter.filter);

  const { data = {}, isFetching, isError } = useGetArtworksQuery(filter);

  const { data: artworks = [], total: artworksTotal = 0 } = data;

  return (
    <section>
      <ArtworksList
        artworks={artworks}
        isFetching={isFetching}
        isError={isError}
      />

      <ArtworksNavigation
        artworksTotal={artworksTotal}
        forcePage={filter.skip}
        perPage={filter.limit}
        isFetching={isFetching}
        isError={isError}
      />
    </section>
  );
};
