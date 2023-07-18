// Config
import { themes } from "features/toggle-theme/config";

// Reducers
import { reducer, changeTheme } from "./theme-reducers";

describe("theme reducer", () => {
  it("reducer with empty state", () => {
    expect(reducer({}, changeTheme())).toEqual({
      theme: themes.dark,
    });
  });

  it("change theme", () => {
    expect(reducer({ theme: themes.dark }, changeTheme())).toEqual({
      theme: themes.light,
    });
  });
});
