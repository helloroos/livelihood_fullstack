// import * as NewsApiUtil from '../util/news_api_util';
const app_key = require('../../config/keys').newsApiKey;

export const RECEIVE_NEWS = 'RECEIVE_NEWS';

const receiveNews = (news) => {
  return {
    type: RECEIVE_NEWS,
    news: news
  }
}

const fetchNews = () => (dispatch) => {
  return fetch(`https://newsapi.org/v2/everything?q=crypto%20AND%20cryptocurrency%20AND%20crypto%20currency&apiKey=${app_key}`)
    .then((res) => res.json())
    // (errors) => dispatch(receiveErrors(errors.responseJSON))
}
