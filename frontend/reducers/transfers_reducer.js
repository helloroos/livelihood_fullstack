import { CURRENT_USER } from "../actions/session_actions";
// import { RECEIVE_TRANSFER, RECEIVE_TRANSFERS } from "../actions/transfer_action";
import { MAKE_TRANSFER, RECEIVE_TRANSFERS } from "../actions/transfer_action";
import { GET_USER_INFO } from "../actions/user_actions";
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";

const initialState = [];

const transfersReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState = state.slice();
  let transfers;
  switch (action.type) {
    case MAKE_TRANSFER:
      newState.push(action.transfer);
      return newState;
    case CURRENT_USER:
      transfers = Object.keys(action.currentUser.transfers);
      transfers.forEach((key) => {
        newState.push(action.currentUser.transfers[key]);
      });
      return newState;
    case GET_USER_INFO:
      if (action.user.transfers.length !== newState.length) {
        transfers = Object.keys(action.user.transfers);
        transfers.forEach((key) => {
          newState.push(action.user.transfers[key]);
        });
      }
      return newState;
    case LOGOUT_CURRENT_USER:
      return initialState;
    default:
      return state;
  }
}

export default transfersReducer;