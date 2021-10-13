import { CURRENT_USER } from "../actions/session_actions";
// import { RECEIVE_TRANSFER, RECEIVE_TRANSFERS } from "../actions/transfer_action";
import { MAKE_TRANSFER, RECEIVE_TRANSFERS } from "../actions/transfer_action";
import { GET_USER_INFO } from "../actions/user_actions";
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";

const initialState = [];

const transfersReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case MAKE_TRANSFER:
      let newState = [];
      newState.push(action.transfer);
      return newState;
    case GET_USER_INFO:
      let newArr = Object.values(action.user.transfers);
      return newArr;
    case LOGOUT_CURRENT_USER:
      return initialState;
    default:
      return state;
  }
}

export default transfersReducer;