import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_TRANSFER, RECEIVE_TRANSFERS } from "../actions/transfer_action";

const transfersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_TRANSFER:
            return Object.assign({}, state, { transfer: action.transfer });
            // case RECEIVE_TRANSFERS:
            //     return action.transfers;
            case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { transfer: action.currentUser.transfers });
        default:
            return state;
    }
}

export default transfersReducer;