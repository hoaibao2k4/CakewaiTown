import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Item } from '~/types';
interface cartState {
  list: Item[],
  total: number
}
const initialState : cartState = {
  list: [],
  total: 0
}
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action : PayloadAction<Item>) => {
      if (state.list) {
      const index = state.list.findIndex(
        (cake) => cake.product_id === action.payload.product_id && cake.variant === action.payload.variant,
      );
      if (index !== -1) {
        state.list[index].buy_quantity += action.payload.buy_quantity;
      } else {
        state.list.push(action.payload);
      }
    }
    },
    increaseItem: (state, action : PayloadAction<Item>) => {
      const item = state.list.find(
        (item) =>
          item.product_id === action.payload.product_id &&
          item.variant === action.payload.variant,
      );
      if (item) item.buy_quantity += 1;
    },
    decreaseItem: (state, action : PayloadAction<Item> ) => {
      const item = state.list.find(
        (item) =>
          item.product_id === action.payload.product_id &&
          item.variant === action.payload.variant,
      );
      if (item && item.buy_quantity > 1) item.buy_quantity -= 1;
    },
    removeFromCart: (state, action : PayloadAction<Item>) => {
      const { product_id, variant } = action.payload;
      state.list = state.list.filter(
        (item) => !(item.product_id === product_id && item.variant === variant),
      );
    },
    setCart: (state, action) => {
      state.list = action.payload
    },
    updateItem: (state, action : PayloadAction<Item>) => {
      const { product_id, variant, buy_quantity } = action.payload;
      const item = state.list.find(
        (item) =>
          item.product_id === product_id && item.variant === variant,
      );
      if (item) {
        item.buy_quantity = buy_quantity; 
      }
    }
  },
});

export const { addToCart, increaseItem, decreaseItem, removeFromCart, setCart } = cartSlice.actions;

export default cartSlice.reducer;
