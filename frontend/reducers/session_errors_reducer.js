import { CLOSE_MODAL } from "../actions/modal_actions";
import {
  CURRENT_USER, RECEIVE_SESSION_ERRORS, RESET_ERRORS
} from "../actions/session_actions";

const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case CURRENT_USER:
      // case RECEIVE_CURRENT_USER:
      return [];
    case RESET_ERRORS:
      return [];
    case CLOSE_MODAL:
      return [];
    default:
      return state;
  }
};

export default sessionErrorsReducer;