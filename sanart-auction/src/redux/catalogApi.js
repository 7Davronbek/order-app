import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { PORT } from "../constants";

export const catalogApi = createApi({
  reducerPath: "testApi",
  baseQuery: fetchBaseQuery({ baseUrl: PORT }),
  endpoints: (builder) => ({
    getCatalog: builder.query({
      query: () => `/ru/contents/v1/catalog/`,
    }),
  }),
});

export const { useGetCatalogQuery } = catalogApi;
