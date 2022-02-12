export const addItemToCart = (cartItems, item) => {
  const existingCartItem = cartItems.find((i) => i.id === item.id);

  if (existingCartItem) {
    return cartItems.map((cartItem) => {
      if (cartItem.id === item.id) {
        return { ...cartItem, quantity: cartItem.quantity + 1 };
      }
      return cartItem;
    });
  }

  return [...cartItems, { ...item, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, item) => {
  const existingCartItem = cartItems.find((i) => i.id === item.id);

  if (existingCartItem) {
    if (existingCartItem.quantity > 1) {
      return cartItems.map((cartItem) => {
        if (cartItem.id === item.id) {
          return { ...cartItem, quantity: cartItem.quantity - 1 };
        }
        return cartItem;
      });
    } else {
      return clearItemFromCart(cartItems, item);
    }
  }
};

export const clearItemFromCart = (cartItems, itemToRemove) => {
  return cartItems.filter((item) => item.id !== itemToRemove.id);
};
