import { TOKEN_INFO, RECEIVE_TOKENS, RECEIVE_TOKEN_HISTORICAL, RECEIVE_TOKEN_LIST } from "../actions/token_actions";
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";
import { combineReducers } from "redux";

const tokensReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TOKENS:
      return action.tokens;
    case LOGOUT_CURRENT_USER:
     return [];
    default:
      return state;
  }
};

const tokenListReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TOKEN_LIST:
      return action.tokens;
    case LOGOUT_CURRENT_USER:
     return [];
    default:
      return state;
  }
};

const tokenReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case TOKEN_INFO:
      newState = action.token;
      return newState;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
};

const tokenHistoricalReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TOKEN_HISTORICAL:
      return { tokenHistorical: { [action.token.id]: action.token } };
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
};

const tokensReducers = combineReducers({
  tokens: tokensReducer,
  tokenList: tokenListReducer,
  token: tokenReducer,
  tokenHistoricals: tokenHistoricalReducer,
});

export default tokensReducers;