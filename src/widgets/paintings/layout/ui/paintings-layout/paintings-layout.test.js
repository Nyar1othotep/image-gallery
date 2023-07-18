import { Server } from "miragejs";
import { screen, waitFor } from "@testing-library/react";

// Shared
import { renderTestApp, createMockServer } from "shared/lib";
// eslint-disable-next-line jest/no-mocks-import
import "shared/lib/tests/__mocks__/intersection-observer-mock";

// Component
import { PaintingsLayout } from "./paintings-layout";

describe("painting paintings-layout component", () => {
  let server: Server;

  beforeEach(() => (server = createMockServer()));
  afterEach(() => server.shutdown());

  it("shows paintings", async () => {
    renderTestApp(<PaintingsLayout />, {
      route: "/",
    });

    await waitFor(() =>
      expect(screen.queryAllByTestId("painting-card").length).toEqual(20)
    );
  });
});
