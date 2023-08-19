// Widgets
import { ArtworksFilter } from "widgets/artworks/artworks-filter";
import { ArtworksLayout } from "widgets/artworks/artworks-layout";

export const MainPage = () => {
  return (
    <main>
      <ArtworksFilter />
      <ArtworksLayout />
    </main>
  );
};
