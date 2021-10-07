import { CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session_actions";
import { GET_USER_INFO } from "../actions/user_actions";

// const initialState = { buyingPower: 0 }
const initialState = 0;

const buyingPowerReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState = 0;

  switch (action.type) {

    case CURRENT_USER:
      return newState = action.currentUser.buyingPower;
    case GET_USER_INFO:
      return newState = action.user.buyingPower;
    case LOGOUT_CURRENT_USER:
      return initialState;
      default:
        return state;
      }
    }
    
    export default buyingPowerReducer;
    
    // const buyingPowerReducer = (state = initialState, action) => {
      //   Object.freeze(state);
      //   switch (action.type) {
        //     case RECEIVE_CURRENT_USER:
        // return Object.assign({}, { buyingPower: action.currentUser.buyingPower });
        // newState.buyingPower = action.currentUser.buyingPower;
        //       // return action.currentUser.buyingPower;
        //     return Object.assign({}, state, {buyingPower: action.currentUser.buyingPower});
        //     case RECEIVE_USER:
        // newState.buyingPower = action.user.buyingPower;
        // return newState;
        // return Object.assign({}, { buyingPower: action.user.buyingPower });
//       return action.user.buyingPower;
//     // return Object.assign({}, state, { buyingPower: action.user.buyingPower });
//     default:
//       return state;
//   }
// }

