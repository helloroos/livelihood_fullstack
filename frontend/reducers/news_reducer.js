import { RECEIVE_NEWS } from "../actions/news_actions";
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";

const initialState = {};

const newsReducer = (state = initialState, action) => {
  Object.freeze(state);
  // let newState = {};
  switch (action.type) {
    case RECEIVE_NEWS:
      return { news: action.news }

      // return Object.assign({}, { orders: action.orders });
    case LOGOUT_CURRENT_USER:
      return initialState;
    default:
      return state;
  }
};

export default newsReducer;