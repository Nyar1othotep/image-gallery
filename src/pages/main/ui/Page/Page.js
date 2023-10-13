// Widgets
import { ArtworksLayout } from "widgets/artworks";

// Features
import { FiltersLayout } from "features/filters";

export const MainPage = () => {
  return (
    <main>
      <FiltersLayout />
      <ArtworksLayout />
    </main>
  );
};
