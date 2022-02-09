export default class Actions {
  static TOGGLE_CART_HIDDEN = new Actions("Toggle cart visibility");
  static ADD_ITEM = new Actions("Add item to cart");
  static REMOVE_ITEM = new Actions("Remove item from cart");

  constructor(name) {
    this.name = name;
  }

  toString() {
    return `[Action "${this.name}"]`;
  }
}
