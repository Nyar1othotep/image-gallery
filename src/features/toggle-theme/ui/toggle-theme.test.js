import { fireEvent, render, screen } from "@testing-library/react";

// Component
import { ToggleTheme } from "./toggle-theme";

describe("toggle theme component", () => {
  it("renders component", () => {
    render(<ToggleTheme />);
    const component = screen.getByTestId("toggle-theme");
    expect(component).toBeInTheDocument();
  });

  it("click on component", () => {
    const handleMock = jest.fn();
    render(<ToggleTheme onClick={handleMock} />);
    const component = screen.getByTestId("toggle-theme");

    fireEvent.click(component);
    expect(handleMock).toBeCalledTimes(1);
  });

  it("renders svg", () => {
    render(<ToggleTheme />);
    const svg = screen.getByTestId("toggle-theme-svg");

    expect(svg).toBeInTheDocument();
  });
});
