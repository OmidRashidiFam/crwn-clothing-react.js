import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

export const selectIsVisible = createSelector(
  [selectCartReducer],
  (cartSlices) => cartSlices.isVisible
);

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cartSlice) => cartSlice.cartItems
);

export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((count, cartItems) => count + cartItems.quantity, 0)
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (total, cartItems) => total + cartItems.quantity * cartItems.price,
    0
  )
);
