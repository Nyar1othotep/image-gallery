// Widgets
import { Header } from "widgets/header/header";
import { PaintingsFilter } from "widgets/paintings/paintings-filter";
import { PaintingsList } from "widgets/paintings/paintings-list";

export const MainPage = () => {
  return (
    <main>
      <Header />
      <PaintingsFilter />
      <PaintingsList />
    </main>
  );
};
