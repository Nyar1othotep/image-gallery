import { typicodeApi } from "shared/api";
import { transformPaintings, transformPainting } from "../lib";

export const paintingApi = typicodeApi.apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getPaintings: build.query({
      query: (filter) => ({
        url: "/artworks?limit=20&has_image=1",
        method: "GET",
        params: filter,
      }),
      transformResponse: (response) => {
        const data = response.data.map(transformPaintings);
        const total = response.info.total;

        return { data, total };
      },
    }),
    getPainting: build.query({
      query: (id) => ({
        url: `/artworks/${id}?limit=1&has_image=1&fields=id,title,creators,creation_date,images,culture,wall_description,technique,creditline,accession_number`,
        method: "GET",
      }),
      transformResponse: (response) => {
        const data = transformPainting(response.data);

        return { data };
      },
    }),
  }),
});

export const { useGetPaintingsQuery, useGetPaintingQuery } = paintingApi;
