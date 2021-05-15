import * as TokenAPIUtil from '../util/token_api_util';
const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();

export const RECEIVE_TOKENS = 'RECEIVE_TOKENS';
export const RECEIVE_TOKEN = 'RECEIVE_TOKEN';

const receiveTokens = (tokens) => {
    return {
        type: RECEIVE_TOKENS,
        tokens: tokens
    }
};

const receiveToken = (token) => {
    return {
        type: RECEIVE_TOKEN,
        token: token
    }
};

const simplify = (res) => {
    return {
        id: res.id,
        token_symbol: res.symbol,
        token: res.name
    }
}

// export const fetchTokens = () => (dispatch) => {
//     return TokenAPIUtil.fetchTokens()
//         .then((res) => dispatch(receiveTokens(res)))
// };

export const fetchTokens = () => (dispatch) => {
    return CoinGeckoClient.coins.all()
        .then((res) => simplify(res))
        .then((res) => dispatch(receiveTokens(res)))
};

export const fetchToken = (tokenID) => (dispatch) => {
    // return CoinGeckoClient.coins.fetch(tokenID)
    return fetch(`https://api.coingecko.com/api/v3/coins/${tokenID}?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=false`
)
    .then(response => response.json())
    .then((res) => simplify(res))
    .then((res) => dispatch(receiveTokens(res)))
};

// export const fetchToken = (tokenID) => (dispatch) => {
//     return TokenAPIUtil.fetchToken(tokenID)
//         .then((res) => dispatch(receiveToken(res)))
// };