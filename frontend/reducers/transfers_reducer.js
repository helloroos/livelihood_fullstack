import { MAKE_TRANSFER, RECEIVE_TRANSFERS } from "../actions/transfer_action";
import { GET_USER_INFO } from "../actions/user_actions";
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";

// Pure func to update global state
// Takes initial state and action - always returns a new state
const initialState = [];
const transfersReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case MAKE_TRANSFER:
      return Object.values(action.transfer.transfers);
    case GET_USER_INFO:
      return Object.values(action.user.transfers);
    case LOGOUT_CURRENT_USER:
      return initialState;
    default:
      return state;
  }
}

export default transfersReducer;