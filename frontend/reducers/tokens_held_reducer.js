import { CURRENT_USER } from "../actions/session_actions";
import { GET_USER_INFO } from "../actions/user_actions";
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";

const initialState = [];

const tokensHeldReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState = state.slice();
  let tokensHeld;
  switch (action.type) {
    case CURRENT_USER:
      tokensHeld = Object.keys(action.currentUser.tokensHeld);
      tokensHeld.forEach((key) => {
        newState.push(action.currentUser.tokensHeld[key]);
      });
      return newState;
    case GET_USER_INFO:
      if (action.user.tokensHeld.length !== newState.length) {
        tokensHeld = Object.keys(action.user.tokensHeld);
        tokensHeld.forEach((key) => {
          newState.push(action.user.tokensHeld[key]);
        });
      } 
      return newState;
    case LOGOUT_CURRENT_USER:
      return initialState;
    default:
      return state;
  }
}

export default tokensHeldReducer;