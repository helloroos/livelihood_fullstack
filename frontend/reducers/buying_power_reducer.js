import { CURRENT_USER } from "../actions/session_actions";
import { GET_USER_INFO } from "../actions/user_actions";

const initialState = { buyingPower: 0 }

const buyingPowerReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState = 0;

  switch (action.type) {

    case CURRENT_USER:
      // newState.buyingPower = action.currentUser.buyingPower;
      return newState = action.currentUser.buyingPower;
      // return Object.assign({}, { buyingPower: action.currentUser.buyingPower });

    case GET_USER_INFO:
      // newState.buyingPower = action.user.buyingPower;
      // return newState;
      // return Object.assign({}, { buyingPower: action.user.buyingPower });
      return newState = action.user.buyingPower;
    default:
      return state;
  }
}

export default buyingPowerReducer;

// const buyingPowerReducer = (state = initialState, action) => {
//   Object.freeze(state);
//   switch (action.type) {
//     case RECEIVE_CURRENT_USER:
//       // return action.currentUser.buyingPower;
//     return Object.assign({}, state, {buyingPower: action.currentUser.buyingPower});
//     case RECEIVE_USER:
//       return action.user.buyingPower;
//     // return Object.assign({}, state, { buyingPower: action.user.buyingPower });
//     default:
//       return state;
//   }
// }

