// store all information of item in localstorage

// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface Product {
//   name: string;
//   description: string;
//   price: number;
//   category: string;
//   quantity: number;
//   ratings: number;
//   images: string[];
// }

// interface ProductState {
//   savedProducts: Product[];
// }

// const initialState: ProductState = {
//   savedProducts: JSON.parse(localStorage.getItem('savedProducts') || '[]'),
// };

// const productSlice = createSlice({
//   name: 'product',
//   initialState,
//   reducers: {
//     addProduct: (state, action: PayloadAction<Product>) => {
//       state.savedProducts.push(action.payload);
//       localStorage.setItem('savedProducts', JSON.stringify(state.savedProducts));
//     },
//     removeProduct: (state, action: PayloadAction<string>) => {
//       state.savedProducts = state.savedProducts.filter(
//         (product) => product.name !== action.payload
//       );
//       localStorage.setItem('savedProducts', JSON.stringify(state.savedProducts));
//     },
//     clearProducts: (state) => {
//       state.savedProducts = [];
//       localStorage.removeItem('savedProducts');
//     },
//   },
// });

// export const { addProduct, removeProduct, clearProducts } = productSlice.actions;

// export default productSlice.reducer;

// store only _id of every item

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductState {
  savedProductIds: string[];
}

const initialState: ProductState = {
  savedProductIds: JSON.parse(localStorage.getItem("savedProductIds") || "[]"),
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProductId: (state, action: PayloadAction<string>) => {
      if (!state.savedProductIds.includes(action.payload)) {
        state.savedProductIds.push(action.payload);
        localStorage.setItem(
          "savedProductIds",
          JSON.stringify(state.savedProductIds)
        );
      }
    },
    removeProductId: (state, action: PayloadAction<string>) => {
      state.savedProductIds = state.savedProductIds.filter(
        (id) => id !== action.payload
      );
      localStorage.setItem(
        "savedProductIds",
        JSON.stringify(state.savedProductIds)
      );
    },
    clearProductIds: (state) => {
      state.savedProductIds = [];
      localStorage.removeItem("savedProductIds");
    },
  },
});

export const { addProductId, removeProductId, clearProductIds } =
  productSlice.actions;

export default productSlice.reducer;
