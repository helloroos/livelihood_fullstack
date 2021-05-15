import { RECEIVE_TOKEN, RECEIVE_TOKENS } from "../actions/token_actions";

const tokensReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_TOKENS:
            return action.tokens;
            // return Object.assign({}, state, { [action.tokens.id]: action.tokens });
        case RECEIVE_TOKEN:
            return Object.assign({}, state, { [action.token.id]: action.token });
        default:
            return state;
    }
};

export default tokensReducer;