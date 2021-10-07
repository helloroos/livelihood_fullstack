import {
  LOGOUT_CURRENT_USER,
  CURRENT_USER
} from "../actions/session_actions";
import { GET_USER_INFO } from "../actions/user_actions";

const initialState = { currentUserId: null }

const sessionReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case CURRENT_USER:
      return Object.assign({}, { currentUserId: action.currentUser.user.id });
    case GET_USER_INFO:
      return Object.assign({}, { currentUserId: action.user.user.id });
    case LOGOUT_CURRENT_USER:
      return initialState;
    default:
      return state;
  }
}

export default sessionReducer;