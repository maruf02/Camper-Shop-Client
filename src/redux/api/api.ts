import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseAPi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => ({
        url: "/api/products",
        method: "GET",
      }),
    }),
    getSearchProducts: builder.query({
      query: (params) => ({
        url: `/api/products?searchTerm=${params}`,
        method: "GET",
      }),
    }),
    getCategoriesProducts: builder.query({
      query: () => ({
        url: "/api/products",
        method: "GET",
      }),
    }),
    getSortProducts: builder.query({
      query: () => ({
        url: "/api/products",
        method: "GET",
      }),
    }),
    getPriceRangeProducts: builder.query({
      query: () => ({
        url: "/api/products",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetSearchProductsQuery,
  useGetPriceRangeProductsQuery,
  useGetCategoriesProductsQuery,
  useGetSortProductsQuery,
} = baseApi;
