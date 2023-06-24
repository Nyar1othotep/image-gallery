import { render, screen } from "@testing-library/react";

// Component
import { PaintingCard } from "./painting-card";

describe("painting card component", () => {
  it("renders component", () => {
    render(<PaintingCard />);
    const component = screen.getByTestId("painting-card");
    expect(component).toBeInTheDocument();
  });
});
