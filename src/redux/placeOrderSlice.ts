import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PlaceOrderState {
  orderData: {
    totalItems: number;
    items: Array<{
      _id: string;
      name: string;
      requiredQty: number;
      price: number;
    }>;
    totalPrice: number;
  } | null;
}

const initialState: PlaceOrderState = {
  orderData: null,
};

const placeOrderSlice = createSlice({
  name: "placeOrder",
  initialState,
  reducers: {
    setOrderData(state, action: PayloadAction<PlaceOrderState["orderData"]>) {
      state.orderData = action.payload;
      localStorage.setItem("orderData", JSON.stringify(action.payload));
    },
    clearOrderData(state) {
      state.orderData = null;
      localStorage.removeItem("orderData");
    },
  },
});

export const { setOrderData, clearOrderData } = placeOrderSlice.actions;
export default placeOrderSlice.reducer;
