import * as TokenAPIUtil from '../util/token_api_util';
const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();

export const RECEIVE_TOKENS = 'RECEIVE_TOKENS';
export const RECEIVE_TOKEN = 'RECEIVE_TOKEN';
export const RECEIVE_TOKEN_HISTORICAL = 'RECEIVE_TOKEN_HISTORICAL';

const topTokens = [
    "btc", "eth", "bnb", "ada", "doge", "xrp", "usdt", "dot", "bch", "ltc",
    "uni", "link", "xlm", "usdc", "sol", "etc", "vet", "matic", "eos", "theta",
    "trx", "okb", "wbtc", "busd", "fil", "shib", "xmr", "neo", "aave", "luna",
    "atom", "klay", "miota", "bsv", "ceth", "ht", "cake", "ksm", "safemoon",
    "xtz", "ftt", "dai", "AVAX", "rune", "algo", "mkr", "cro", "cdai", "cusdc",
    "btt", "comp", "dash", "leo", "waves", "zec", "snx", "egld", "xem", "hbar",
    "sushi", "cel", "chz", "dcr", "yfi", "zil", "near", "amp", "ust", "tel",
    "qtum", "hot", "nexo", "enj", "bat", "ftm", "ont", "arrr", "btg", "one",
    "stx", "grt", "mana", "dgb", "lusd", "hbtc", "uma", "sc", "nano", "zen",
    "gt", "zrx", "omg", "bnt", "icx", "pax", "tusd", "steth", "rvn", "hnt",
    "crv", "iost", "xvs", "xsushi", "ar", "chsb", "bake", "flow", "ankr",
    "xdc", "fei", "nxm", "rsr", "wrx", "lsk", "kcs", "husd", "1inch", "bcd",
    "xvg", "bcha", "vgx", "lpt", "omi", "win", "lrc", "ren", "SNT", "qnt",
    "cusdt", "dent", "ckb", "pundix", "tribe", "cfx", "bal", "rlc", "npxs",
    "feg", "oxy", "renbtc", "btmx", "alpha", "celo", "kobe", "erg", "btcst",
    "mir", "reef", "ewt", "srm"
]

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

const receiveTokenHistorical = (token) => {
    return {
        type: RECEIVE_TOKEN_HISTORICAL,
        token: token
    }
};

const simplifyToken = (res) => {
    return {
        id: res.id,
        symbol: res.symbol,
        token: res.name,
        about: res.description.en,
        market_price: res.market_data.current_price.usd,
        change_one_d: res.market_data.price_change_percentage_24h,
        change_seven_d: res.market_data.price_change_percentage_7d,
        change_fourteen_d: res.market_data.price_change_percentage_14d,
        change_thirty_d: res.market_data.price_change_percentage_30d,
        change_sixty_d: res.market_data.price_change_percentage_60d,
        change_one_y: res.market_data.price_change_percentage_1y,
    }
}

const simplifyTokenHistorical = (res) => {
    return {
        id: res.id,
        symbol: res.symbol,
        token: res.name,
        market_price: res.market_data.current_price.usd,
    }
}

const simplifyTokens = (res) => {
    let newRes = [];
    res.forEach(element => {
        if (topTokens.includes(element.symbol)) {
            newRes.push(element)
        }
    });
    return newRes;
}

export const fetchTokens = () => (dispatch) => {
    return fetch(`https://api.coingecko.com/api/v3/coins/list?include_platform=false`)
    .then((res) => res.json())
    .then((res) => simplifyTokens(res))
    .then((res) => dispatch(receiveTokens(res)),
    (errors) => dispatch(receiveErrors(errors.responseJSON)))
};

export const fetchToken = (tokenId) => (dispatch) => {
    return fetch(`https://api.coingecko.com/api/v3/coins/${tokenId}?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=false`)
    .then((res) => res.json())
    .then((res) => simplifyToken(res))
    .then((res) => dispatch(receiveToken(res)))
    // (errors) => dispatch(receiveErrors(errors.responseJSON)))
};

export const fetchTokenHistorical = (tokenId, date) => (dispatch) => {
    return fetch(`https://api.coingecko.com/api/v3/coins/${tokenId}/history?date=${date}&localization=false`)
    .then((res) => res.json())
    .then((res) => simplifyTokenHistorical(res))
    .then((res) => dispatch(receiveToken(res)))
    // (errors) => dispatch(receiveErrors(errors.responseJSON)))
};