import * as TokenAPIUtil from '../util/token_api_util';

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

export const fetchTokens = () => (dispatch) => {
    return TokenAPIUtil.fetchTokens()
        .then((res) => dispatch(receiveTokens(res)))
};

export const fetchToken = (tokenID) => (dispatch) => {
    return TokenAPIUtil.fetchToken(tokenID)
        .then((res) => dispatch(receiveToken(res)))
};