import { render, screen } from "@testing-library/react";

// Component
import { PageNavigation } from "./page-navigation";

describe("page navigation component", () => {
  it("renders default component without args", () => {
    render(<PageNavigation />);
    const component = screen.queryByRole("navigation");
    expect(component).not.toBeInTheDocument();
  });

  it("renders component with args", () => {
    render(<PageNavigation total={100} itemsPerPage={100} />);
    const component = screen.getByRole("navigation");
    expect(component).toBeInTheDocument();
  });

  it("renders svg", () => {
    render(<PageNavigation total={100} itemsPerPage={100} />);
    const svg = screen.getAllByTestId("page-navigation-svg");

    expect(svg.length).toEqual(2);
  });
});
