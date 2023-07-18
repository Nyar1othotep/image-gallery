// Widgets
import { PaintingsFilter } from "widgets/paintings/filter";
import { PaintingsLayout } from "widgets/paintings/layout";

export const MainPage = () => {
  return (
    <main>
      <PaintingsFilter />
      <PaintingsLayout />
    </main>
  );
};
