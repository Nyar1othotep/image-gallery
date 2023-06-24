import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// Shared
import { renderTestApp } from "shared/lib/tests/renderTestApp";

// Component
import { Header } from "./header";

describe("header component", () => {
  it("renders logo", () => {
    renderTestApp(<Header />, {
      initialState: {},
      route: "/",
    });
    const logo = screen.getByTestId("logo-svg");

    expect(logo).toBeInTheDocument();
  });

  it("renders toggle button", () => {
    renderTestApp(<Header />, {
      initialState: {},
      route: "/",
    });
    const toggle = screen.getByTestId("toggle-theme");

    expect(toggle).toBeInTheDocument();
  });

  it("toggle theme to dark", () => {
    renderTestApp(<Header />, {
      initialState: {
        theme: {
          theme: "dark",
        },
      },
      route: "/",
    });
    const toggle = screen.getByTestId("toggle-theme");
    userEvent.click(toggle);

    expect(document.documentElement.dataset.theme).toBe("light");
  });

  it("toggle theme to light", () => {
    renderTestApp(<Header />, {
      initialState: {
        theme: {
          theme: "light",
        },
      },
      route: "/",
    });
    const toggle = screen.getByTestId("toggle-theme");
    userEvent.click(toggle);

    expect(document.documentElement.dataset.theme).toBe("dark");
  });
});
