export default class Actions {
  static TOGGLE_CART_HIDDEN = new Actions("Toggle cart visibility");

  constructor(name) {
    this.name = name;
  }

  toString() {
    return `[Action "${this.name}"]`;
  }
}
