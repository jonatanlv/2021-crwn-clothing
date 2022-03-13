export default class Actions {
  static UPDATE_COLLECTIONS = new Actions("Update collections");

  constructor(name) {
    this.name = name;
  }

  toString() {
    return `[Action "${this.name}"]`;
  }
}
