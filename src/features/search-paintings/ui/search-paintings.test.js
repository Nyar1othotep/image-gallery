import { fireEvent, render, screen } from "@testing-library/react";

// Component
import { SearchPaintings } from "./search-paintings";

describe("search-paintings component", () => {
  it("renders search-paintings", () => {
    render(<SearchPaintings />);
    const component = screen.getByTestId("search-paintings-button");

    expect(component).toBeInTheDocument();
  });

  it("click on component", () => {
    const handleMock = jest.fn();
    render(<SearchPaintings onClick={handleMock} />);
    const component = screen.getByTestId("search-paintings-button");

    fireEvent.click(component);
    expect(handleMock).toBeCalledTimes(1);
  });

  it("renders svg", () => {
    render(<SearchPaintings />);
    const svg = screen.getByTestId("search-paintings-button-svg");

    expect(svg).toBeInTheDocument();
  });
});
