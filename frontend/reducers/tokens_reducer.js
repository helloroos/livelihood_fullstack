import { RECEIVE_TOKEN, RECEIVE_TOKENS, RECEIVE_TOKEN_HISTORICAL } from "../actions/token_actions";
import { combineReducers } from "redux";

const tokensReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_TOKENS:
            return { tokens: action.tokens };
        default:
            return state;
    }
};

const tokenReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_TOKEN:
            return { [action.token.id]: action.token };
        default:
            return state;
    }
};

const tokenHistoricalReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_TOKEN_HISTORICAL:
            return { tokenHistorical: { [action.token.id]: action.token }};
        default:
            return state;
    }
};

const tokensReducers = combineReducers({
    tokens: tokensReducer,
    token: tokenReducer,
    tokenHistoricals: tokenHistoricalReducer,
});

export default tokensReducers;