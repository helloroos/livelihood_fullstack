import { RECEIVE_NEWS } from "../actions/news_actions";

const newsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_NEWS:
      return { news: action.news }
      // return Object.assign({}, { orders: action.orders });
    default:
      return state;
  }
};

export default newsReducer;