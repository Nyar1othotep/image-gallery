import { render, screen } from "@testing-library/react";

// Component
import { PaintingsItems } from "./paintings-items";

describe("paintings items component", () => {
  it("renders spinner when isFetching", () => {
    render(<PaintingsItems isFetching={true} />);
    const spinner = screen.getByTestId("spinner");
    expect(spinner).toBeInTheDocument();
  });

  it("renders error message when isError", () => {
    render(<PaintingsItems isError={true} />);
    const error = screen.getByText(/something went wrong/i);
    expect(error).toBeInTheDocument();
  });

  it("renders empty message when data is empty", () => {
    render(<PaintingsItems data={{ data: [] }} />);
    const empty = screen.getByText(/no results found/i);
    expect(empty).toBeInTheDocument();
  });
});
