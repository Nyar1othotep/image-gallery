// Shared
import { renderWithRedux } from "shared/lib";

// Config
import { themes } from "../../config";

// Selectors
import { useTheme } from "./theme-selectors";

describe("theme selectors", () => {
  it("renders element with empty state", () => {
    const TestComponent = () => {
      const theme = useTheme();
      expect(theme).toBe(themes.dark);
      return null;
    };

    renderWithRedux(<TestComponent />, {});
  });

  it("renders element with theme dark state", () => {
    const TestComponent = () => {
      const theme = useTheme();
      expect(theme).toBe(themes.dark);
      return null;
    };

    renderWithRedux(<TestComponent />, {
      theme: {
        theme: themes.dark,
      },
    });
  });

  it("renders element with theme light state", () => {
    const TestComponent = () => {
      const theme = useTheme();
      expect(theme).toBe(themes.light);
      return null;
    };

    renderWithRedux(<TestComponent />, {
      theme: {
        theme: themes.light,
      },
    });
  });
});
