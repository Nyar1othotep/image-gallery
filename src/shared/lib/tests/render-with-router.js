import { MemoryRouter } from "react-router-dom";
import { Routing } from "app/routing";
import { render } from "@testing-library/react";

export const renderWithRouter = (component, initialRoute = "/") => {
  return render(
    <MemoryRouter initialEntries={[initialRoute]}>
      {component || <Routing />}
    </MemoryRouter>
  );
};
