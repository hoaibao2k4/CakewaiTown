import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './store';
import { Item } from '~/api/apiCart';
export const selectCartItems = (state : RootState) => state.cart.list;

export const selectCartTotal = createSelector(
  [selectCartItems],
  (list) =>
    list.reduce((acc, item: Item) => acc + item?.buy_quantity * item?.price, 0)
);
