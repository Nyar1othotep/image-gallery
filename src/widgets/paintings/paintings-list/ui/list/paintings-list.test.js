import { Server } from "miragejs";
import { screen, waitFor } from "@testing-library/react";

// Shared
import { renderWithRedux } from "shared/lib/tests/renderWithRedux";
import { createMockServer } from "shared/lib/server";

// Component
import { PaintingsList } from "./paintings-list";

describe("painting list component", () => {
  let server: Server;

  beforeEach(() => (server = createMockServer()));
  afterEach(() => server.shutdown());

  it("shows paintings", async () => {
    renderWithRedux(<PaintingsList />);

    await waitFor(() =>
      expect(screen.queryAllByTestId("painting-card").length).toEqual(20)
    );
  });
});
