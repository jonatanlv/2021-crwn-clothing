export default class Actions {
  static SET_CURRENT_USER = new Actions("Set current user");

  constructor(name) {
    this.name = name;
  }

  toString() {
    return `[Action "${this.name}"]`;
  }
}
