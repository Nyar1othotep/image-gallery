import { baseApi } from "shared/api";
import { transformArtwork, transformArtworks } from "../lib/transformArtworks";

export const artworkApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getArtworks: build.query({
      query: (filter) => {
        return {
          url: `/artworks?has_image=1`,
          method: "GET",
          params: filter,
        };
      },
      transformResponse: (response) => {
        const data = response.data.map(transformArtworks);
        const total = response.info.total;

        return { data, total };
      },
    }),
    getArtwork: build.query({
      query: (id) => ({
        url: `/artworks/${id}?limit=1&has_image=1&fields=id,title,creators,creation_date,images,culture,wall_description,technique,creditline,accession_number`,
        method: "GET",
      }),
      transformResponse: (response) => {
        const data = transformArtwork(response.data);

        return { data };
      },
    }),
  }),
});

export const { useGetArtworksQuery, useGetArtworkQuery } = artworkApi;
