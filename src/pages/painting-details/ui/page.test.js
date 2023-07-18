import { Server } from "miragejs";
import { screen } from "@testing-library/react";

// Shared
import { renderWithRedux, createMockServer } from "shared/lib";

// Component
import { PaintingDetails } from "./page";

describe("painting details page component", () => {
  let server: Server;

  beforeEach(() => (server = createMockServer()));
  afterEach(() => server.shutdown());

  it("shows painting", async () => {
    jest.mock("react-router-dom", () => ({
      ...jest.requireActual("react-router-dom"),
      useParams: () => ({
        paintingId: "94979",
      }),
      useRouteMatch: () => ({ url: "/painting/94979" }),
    }));

    renderWithRedux(<PaintingDetails />);

    await expect(screen.getByTestId("painting")).toBeInTheDocument();
  });
});
