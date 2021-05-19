import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_USER } from "../actions/user_actions";

const buyingPowerReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({ buyingPower: action.currentUser.buyingPower });
        case RECEIVE_USER:
            return Object.assign({}, state, { buyingPower: action.user.buyingPower });
        default:
            return state;
    }
}

export default buyingPowerReducer;