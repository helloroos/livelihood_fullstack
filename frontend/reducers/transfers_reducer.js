import { RECEIVE_TRANSFER } from "../actions/transfer_action";

const transfersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_TRANSFER:
            return Object.assign({}, { transfers: action.transfers });
        default:
            return state;
    }
}

export default transfersReducer;