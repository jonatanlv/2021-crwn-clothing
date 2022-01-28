class Actions {
  static SET_CURRENT_USER = new Actions("Set current user");

  constructor(name) {
    this.name = name;
  }
}

const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Actions.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export { Actions };
export default userReducer;
