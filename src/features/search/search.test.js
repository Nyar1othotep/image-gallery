import { fireEvent, render, screen } from "@testing-library/react";

// Component
import { Search } from "./search";

describe("search component", () => {
  it("renders search", () => {
    render(<Search />);
    const component = screen.getByTestId("search-button");

    expect(component).toBeInTheDocument();
  });

  it("click on component", () => {
    const handleMock = jest.fn();
    render(<Search onClick={handleMock} />);
    const component = screen.getByTestId("search-button");

    fireEvent.click(component);
    expect(handleMock).toBeCalledTimes(1);
  });

  it("renders svg", () => {
    render(<Search />);
    const svg = screen.getByTestId("search-button-svg");

    expect(svg).toBeInTheDocument();
  });
});
