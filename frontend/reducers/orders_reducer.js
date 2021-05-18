import { RECEIVE_ORDER } from "../actions/order_actions";

const ordersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ORDER:
            return Object.assign({}, { orders: action.orders });
        default:
            return state;
    }
}

export default ordersReducer;