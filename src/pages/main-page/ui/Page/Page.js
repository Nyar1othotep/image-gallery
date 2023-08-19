import { Helmet } from "react-helmet";

// Widgets
import { ArtworksFilter } from "widgets/artworks/artworks-filter";
import { ArtworksLayout } from "widgets/artworks/artworks-layout";

export const MainPage = () => {
  return (
    <main>
      <Helmet>
        <title>Image Gallery</title>
        <meta name="description" content="Main page with lots of artworks" />
      </Helmet>

      <ArtworksFilter />
      <ArtworksLayout />
    </main>
  );
};
