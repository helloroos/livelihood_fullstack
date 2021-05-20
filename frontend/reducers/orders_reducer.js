import { RECEIVE_ORDER, RECEIVE_ORDERS } from "../actions/order_actions";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_USER } from "../actions/user_actions";

const ordersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ORDER:
            return Object.assign({}, { orders: action.orders });
        // case RECEIVE_ORDERS:
        //     return action.orders;
        case RECEIVE_CURRENT_USER:
            return action.currentUser.orders;
            // return Object.assign({}, state, { orders: action.currentUser.orders });
        case RECEIVE_USER:
            return action.user.orders;
            // return Object.assign({}, state, { orders: action.user.orders });
        default:
            return state;
    }
}

export default ordersReducer;