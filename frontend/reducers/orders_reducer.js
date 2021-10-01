import { RECEIVE_ORDER, RECEIVE_ORDERS } from "../actions/order_actions";
import { CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_USER } from "../actions/user_actions";

const ordersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = [];
  switch (action.type) {
    case RECEIVE_ORDER:
      return Object.assign({}, { orders: action.orders });
    // case RECEIVE_ORDERS:
    //     return action.orders;
    case CURRENT_USER:
      // return newState = Object.entries(action.currentUser.orders)
      const orders = Object.keys(action.currentUser.orders);
      orders.forEach((key) => {
        newState.push(action.currentUser.orders[key]);
      });
      return newState;
    // return action.currentUser.orders;
    // return Object.assign({}, state, { orders: action.currentUser.orders });
    case RECEIVE_USER:
      return action.user.orders;
    // return Object.assign({}, state, { orders: action.user.orders });
    default:
      return state;
  }
}

export default ordersReducer;