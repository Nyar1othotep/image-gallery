import { apiSlice } from "./base";
import { transformPainting } from "shared/lib";

export const paintingsApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getPaintings: build.query({
      query: (query) => ({
        url: "/artworks?limit=20&has_image=1",
        method: "GET",
        params: query,
      }),
      transformResponse: (response) => {
        return {
          data: response.data.map(transformPainting),
          info: response.info,
        };
      },
    }),
    getPainting: build.query({
      query: (id) => ({
        url: `/artworks/${id}?limit=1&has_image=1&fields=id,title,creation_date,images,culture,wall_description,technique,creditline,accession_number`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetPaintingsQuery } = paintingsApi;
