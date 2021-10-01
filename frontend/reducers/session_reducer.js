import {
  LOGOUT_CURRENT_USER,
  CURRENT_USER
} from "../actions/session_actions";

const _nullSession = { currentUser: null }

const sessionReducer = (state = _nullSession, action) => {
  Object.freeze(state);
  switch (action.type) {
    case CURRENT_USER:
    // case RECEIVE_CURRENT_USER:
      return Object.assign({}, { currentUserId: action.currentUser.user.id });
    case LOGOUT_CURRENT_USER:
      return _nullSession;
    default:
      return state;
  }
}

export default sessionReducer;