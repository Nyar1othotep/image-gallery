import { screen } from "@testing-library/react";

// Shared
import { renderWithRedux } from "shared/lib/tests/renderWithRedux";

// Component
import { PaintingsFilter } from "./paintings-filter";

describe("paintings filter component", () => {
  it("renders titles", () => {
    renderWithRedux(<PaintingsFilter />);
    const searchByTitle = screen.getByText(/search by/i);
    const filterByTitle = screen.getByText(/filter by/i);

    expect(searchByTitle).toBeInTheDocument();
    expect(filterByTitle).toBeInTheDocument();
  });

  it("renders inputs", () => {
    renderWithRedux(<PaintingsFilter />);
    const inputs = screen.getAllByRole("textbox");

    expect(inputs.length).toEqual(5);
  });
});
