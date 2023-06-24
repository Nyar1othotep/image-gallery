import { MemoryRouter } from "react-router-dom";
import { Routing } from "pages";
import { render } from "@testing-library/react";

export const renderWithRouter = (initialRoute = "/") => {
  return render(
    <MemoryRouter initialEntries={[initialRoute]}>
      <Routing />
    </MemoryRouter>
  );
};
