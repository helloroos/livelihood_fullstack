import { CURRENT_USER } from "../actions/session_actions";
// import { RECEIVE_TRANSFER, RECEIVE_TRANSFERS } from "../actions/transfer_action";
import { MAKE_TRANSFER, RECEIVE_TRANSFERS } from "../actions/transfer_action";
import { RECEIVE_USER } from "../actions/user_actions";

const transfersReducer = (state = [], action) => {
  Object.freeze(state);
  let newState = state.slice();

  switch (action.type) {
    case MAKE_TRANSFER:
      newState.push(action.transfer);
      return newState;
      // return Object.assign({}, state, { transfers: action.transfer });
      // return [...state, action.transfer];
      case CURRENT_USER:
      // case RECEIVE_CURRENT_USER:
      // return action.currentUser.transfers;
      // return Object.assign({}, state, { transfers: action.currentUser.transfers });
      // console.log(action);
      // return [...state, action.currentUser.transfers];
      const transfers = Object.keys(action.currentUser.transfers);
      transfers.forEach((key) => {
        newState.push(action.currentUser.transfers[key]);
      });
      return newState;
      case RECEIVE_USER:
        // return action.user.transfers;
        return Object.assign({}, state, { transfers: action.user.transfer });
    // return Object.assign({}, state, { transfers: action.user.transfers });
    default:
      return state;
  }
}

// const transfersReducer = (state = {}, action) => {
//   Object.freeze(state);
//   switch (action.type) {
//     case RECEIVE_TRANSFER:
//       return Object.assign({}, state, { transfers: action.transfer });
//     case RECEIVE_CURRENT_USER:
//       return action.currentUser.transfers;
//     // return Object.assign({}, state, { transfers: action.currentUser.transfers });
//     case RECEIVE_USER:
//       return action.user.transfers;
//     // return Object.assign({}, state, { transfers: action.user.transfers });
//     default:
//       return state;
//   }
// }

export default transfersReducer;