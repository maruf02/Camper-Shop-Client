import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  quantity: number;
  ratings: number;
  images: string[];
  requiredQty: number;
}

interface ProductState {
  savedProducts: Product[];
}

const initialState: ProductState = {
  savedProducts: JSON.parse(localStorage.getItem("savedProducts") || "[]"),
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      const existingProduct = state.savedProducts.find(
        (product) => product._id === action.payload._id
      );

      if (existingProduct) {
        // Update the quantity if the product already exists in the cart
        if (
          existingProduct.requiredQty + action.payload.requiredQty <=
          existingProduct.quantity
        ) {
          existingProduct.requiredQty += action.payload.requiredQty;
        }
      } else {
        // Add new product to the cart
        state.savedProducts.push(action.payload);
      }

      // Update the local storage
      localStorage.setItem(
        "savedProducts",
        JSON.stringify(state.savedProducts)
      );
    },
    removeProduct: (state, action: PayloadAction<string>) => {
      state.savedProducts = state.savedProducts.filter(
        (product) => product._id !== action.payload
      );
      localStorage.setItem(
        "savedProducts",
        JSON.stringify(state.savedProducts)
      );
    },
    clearProducts: (state) => {
      state.savedProducts = [];
      localStorage.removeItem("savedProducts");
    },
  },
});

export const { addProduct, removeProduct, clearProducts } =
  productSlice.actions;

export default productSlice.reducer;
