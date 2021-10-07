import { MAKE_ORDER, RECEIVE_ORDERS } from "../actions/order_actions";
import { CURRENT_USER } from "../actions/session_actions";
import { GET_USER_INFO } from "../actions/user_actions";
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";

const initialState = [];

const ordersReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState = state.slice();
  let orders;
  switch (action.type) {
    case MAKE_ORDER:
      newState.push(action.order);
      return newState;
    // case CURRENT_USER:
    //   orders = Object.keys(action.currentUser.orders);
    //   orders.forEach((key) => {
    //     newState.push(action.currentUser.orders[key]);
    //   });
    //   return newState;
    case GET_USER_INFO:
      if (action.user.orders.length !== newState.length) {
        orders = Object.keys(action.user.orders);
        orders.forEach((key) => {
          newState.push(action.user.orders[key]);
        });
      }
      return newState;
    case LOGOUT_CURRENT_USER:
      return initialState;
    default:
      return state;
  }
}
    
export default ordersReducer;