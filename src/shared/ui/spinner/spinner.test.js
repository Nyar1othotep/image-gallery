import { render, screen } from "@testing-library/react";

// Component
import { Spinner } from "./spinner";

describe("spinner component", () => {
  it("renders spinner", () => {
    render(<Spinner />);
    const spinner = screen.getByTestId("spinner");
    expect(spinner).toBeInTheDocument();
  });
});
