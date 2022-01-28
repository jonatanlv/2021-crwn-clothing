import { Actions } from "./user.reducer";

export const setCurrentUser = (user) => ({
  type: Actions.SET_CURRENT_USER,
  payload: user,
});
