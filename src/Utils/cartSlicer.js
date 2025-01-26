import { createSlice } from "@reduxjs/toolkit";

const initial = {
  cart: [],
};

const cartSlicer = createSlice({
  name: "cart",
  initialState: initial,
  reducers: {
    addItem(state, action) {
      state.cart = [...state.cart, action.payload];
    },
    removeItem(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    updateItem(state, action) {
      state.cart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          return {
            ...cartItem,
            item: Number(action.payload.value),
            totalPrice: Number(
              (action.payload.value * cartItem.price).toFixed(2)
            ),
          };
        } else {
          return cartItem;
        }
      });
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const { addItem, removeItem, updateItem, clearCart } =
  cartSlicer.actions;
export default cartSlicer.reducer;
