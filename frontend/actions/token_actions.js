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
        symbol: res.symbol.toUpperCase(),
        token: res.name.toUpperCase(),
        market_price: res.market_data.current_price.usd
    }
}

// export const fetchTokens = () => (dispatch) => {
//     return TokenAPIUtil.fetchTokens()
//         .then((res) => dispatch(receiveTokens(res)))
// };

export const fetchTokens = () => (dispatch) => {
    return fetch(`https://api.coingecko.com/api/v3/coins/list?include_platform=false`)
        .then(response => response.json())
        .then((res) => dispatch(receiveTokens(res)),
        (errors) => dispatch(receiveErrors(errors.responseJSON)))
};

export const fetchToken = (tokenID) => (dispatch) => {
    return fetch(`https://api.coingecko.com/api/v3/coins/${tokenID}?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=false`
)
    .then(response => response.json())
    .then((res) => simplify(res))
    .then((res) => dispatch(receiveToken(res)),
    (errors) => dispatch(receiveErrors(errors.responseJSON)))
};

// export const fetchToken = (tokenID) => (dispatch) => {
//     return TokenAPIUtil.fetchToken(tokenID)
//         .then((res) => dispatch(receiveToken(res)))
// };