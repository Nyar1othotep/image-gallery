import { render, screen } from "@testing-library/react";

// Component
import { PaintingsList } from "./paintings-list";

describe("paintings paintings-list component", () => {
  it("renders spinner when isFetching", () => {
    render(<PaintingsList isFetching={true} />);
    const spinner = screen.getByTestId("spinner");
    expect(spinner).toBeInTheDocument();
  });

  it("renders error message when isError", () => {
    render(<PaintingsList isError={true} />);
    const error = screen.getByText(/something went wrong/i);
    expect(error).toBeInTheDocument();
  });

  it("renders empty message when data is empty", () => {
    render(<PaintingsList paintings={[]} />);
    const empty = screen.getByText(/no results found/i);
    expect(empty).toBeInTheDocument();
  });
});
