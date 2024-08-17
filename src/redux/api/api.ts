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
    getProductById: builder.query({
      query: (id: string) => ({
        url: `/api/products/${id}`,
        method: "GET",
      }),
    }),
    getPriceRangeProducts: builder.query({
      query: () => ({
        url: "/api/products",
        method: "GET",
      }),
    }),
    createOrderItem: builder.mutation({
      query: (orderData) => ({
        url: "/api/orderItems",
        method: "POST",
        body: orderData,
      }),
    }),

    addProductItem: builder.mutation({
      query: (productData) => ({
        url: "/api/products",
        method: "POST",
        body: productData,
      }),
    }),

    updateProduct: builder.mutation({
      query: ({ productId, productModifyData }) => ({
        url: `/api/products/${productId}`,
        method: "PUT",
        body: productModifyData,
      }),
    }),
    deleteProduct: builder.mutation({
      query: (productId: string) => ({
        url: `/api/products/${productId}`,
        method: "DELETE",
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
  useGetProductByIdQuery,
  useCreateOrderItemMutation,
  useAddProductItemMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = baseApi;
