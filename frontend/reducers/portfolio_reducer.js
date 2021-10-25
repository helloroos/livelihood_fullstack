import { updatePortfolioValue, fetchPortfolioValues, UPDATE_PORTFOLIO_VALUE } from "../actions/portfolio_value_actions";
import { GET_USER_INFO } from "../actions/user_actions";
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";

const initialState = [];

const portfolioReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState = state.slice();
  let orders;
  switch (action.type) {
    // case UPDATE_PORTFOLIO_VALUE:
    //   newState.push(action.order);
    //   return newState;
    case GET_USER_INFO:
      return Object.values(action.user.portfolio_value);
    case LOGOUT_CURRENT_USER:
      return initialState;
    default:
      return state;
  }
}

export default portfolioReducer;