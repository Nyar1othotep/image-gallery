import { screen } from "@testing-library/react";

// Shared
import { renderWithRouter } from "shared/lib";
// eslint-disable-next-line jest/no-mocks-import
import "shared/lib/tests/__mocks__/intersection-observer-mock";

// Component
import { PaintingCard } from "./painting-card";

describe("painting card component", () => {
  it("renders component", () => {
    renderWithRouter(<PaintingCard />);
    const component = screen.getByTestId("painting-card");
    expect(component).toBeInTheDocument();
  });
});
