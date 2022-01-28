import Actions from "./user.types";

export const setCurrentUser = (user) => ({
  type: Actions.SET_CURRENT_USER,
  payload: user,
});
