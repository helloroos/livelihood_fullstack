import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_TRANSFER, RECEIVE_TRANSFERS } from "../actions/transfer_action";
import { RECEIVE_USER } from "../actions/user_actions";

const transfersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TRANSFER:
      return Object.assign({}, state, { transfers: action.transfer });
    case RECEIVE_CURRENT_USER:
      return action.currentUser.transfers;
    // return Object.assign({}, state, { transfers: action.currentUser.transfers });
    case RECEIVE_USER:
      return action.user.transfers;
    // return Object.assign({}, state, { transfers: action.user.transfers });
    default:
      return state;
  }
}

export default transfersReducer;