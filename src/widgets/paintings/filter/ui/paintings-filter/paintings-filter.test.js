import { fireEvent, screen } from "@testing-library/react";

// Shared
import { renderWithRedux } from "shared/lib";

// Component
import { PaintingsFilter } from "./paintings-filter";

describe("paintings paintings-filter component", () => {
  it("renders titles", () => {
    renderWithRedux(<PaintingsFilter />);
    const searchByTitle = screen.getByText(/search by/i);
    const filterByTitle = screen.getByText(/filter by/i);

    expect(searchByTitle).toBeInTheDocument();
    expect(filterByTitle).toBeInTheDocument();
  });

  it("renders inputs", () => {
    renderWithRedux(<PaintingsFilter />);
    const titleRow = screen.getByTestId("title-row");

    fireEvent.click(titleRow);

    expect(screen.getAllByRole("textbox").length).toEqual(5);
  });
});
