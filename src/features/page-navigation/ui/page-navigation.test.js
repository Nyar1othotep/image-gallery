import { render, screen } from "@testing-library/react";

// Component
import { PageNavigation } from "./page-navigation";

describe("page paintings-navigation component", () => {
  it("renders default component without args", () => {
    render(<PageNavigation />);
    const component = screen.queryByRole("navigation");
    expect(component).not.toBeInTheDocument();
  });

  it("renders component with args", () => {
    render(<PageNavigation paintingsTotal={100} paintingsPerPage={100} />);
    const component = screen.getByRole("navigation");
    expect(component).toBeInTheDocument();
  });

  it("renders svg", () => {
    render(<PageNavigation paintingsTotal={100} paintingsPerPage={100} />);
    const svg = screen.getAllByTestId("page-paintings-navigation-svg");

    expect(svg.length).toEqual(2);
  });
});
