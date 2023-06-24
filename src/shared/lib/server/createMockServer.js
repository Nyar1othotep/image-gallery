import { createServer } from "miragejs";

// Mocks
import paintings from "./__mocks__/paintings.json";

// API url
import { API_URL } from "shared/config";

export const createMockServer = () => {
  return createServer({
    routes() {
      this.urlPrefix = API_URL;

      this.get("/artworks", () => {
        return paintings;
      });

      this.get("/artworks/:id", (scheme, request) => {
        const id = parseInt(request.params.id);
        return [paintings.data.find((painting) => painting.id === id)];
      });
    },
  });
};
