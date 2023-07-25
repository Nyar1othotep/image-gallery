import { Helmet } from "react-helmet";

// Widgets
import { PaintingsFilter } from "widgets/paintings/filter";
import { PaintingsLayout } from "widgets/paintings/layout";

export const MainPage = () => {
  return (
    <main>
      <Helmet>
        <title>Image Gallery</title>
        <meta name="description" content="Main page with lots of paintings" />
      </Helmet>

      <PaintingsFilter />
      <PaintingsLayout />
    </main>
  );
};
