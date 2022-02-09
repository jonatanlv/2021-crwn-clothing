import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems
      .map((item) => item.quantity)
      .reduce((accumulator, quantity) => accumulator + quantity, 0)
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems
    .map((item) => item.quantity * item.price)
    .reduce((accumulator, quantity) => accumulator + quantity, 0)
);
