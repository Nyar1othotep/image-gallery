import { createServer } from "miragejs";

import paintings from "./__mocks__/paintings.json";
import { API_URL } from "../../config";

export const createMockServer = () => {
  return createServer({
    routes() {
      this.urlPrefix = API_URL;

      this.get("/artworks", () => {
        return paintings;
      });

      this.get("/artworks/:id", (scheme, request) => {
        const id = parseInt(request.params.id);
        return { data: paintings.data.find((painting) => painting.id === id) };
      });
    },
  });
};
