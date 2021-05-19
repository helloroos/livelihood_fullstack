import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

const buyingPowerReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { buyingPower: action.currentUser.buyingPower });
        default:
            return state;
    }
}

export default buyingPowerReducer;