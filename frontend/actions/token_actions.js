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

const simplifyToken = (res) => {
    return {
        id: res.id,
        symbol: res.symbol.toUpperCase(),
        token: res.name.toUpperCase(),
        market_price: res.market_data.current_price.usd
    }
}

const topTokens = [
    "btc", "eth", "bnb", "ada", "doge", "xrp", "usdt", "dot", "bch", "ltc", "uni", "link", "xlm", "usdc", 
    "sol", "etc", "vet", "matic", "eos", "theta", "trx", "okb", "wbtc", "busd", "fil", "shib", "xmr", 
    "neo", "aave", "luna", "atom", "klay", "miota", "bsv", "ceth", "ht", "cake", "ksm", "safemoon", 
    "xtz", "ftt", "dai", "AVAX", "rune", "algo", "mkr", "cro", "cdai", "cusdc", "btt", "comp", "dash", 
    "leo", "waves", "zec", "snx", "egld", "xem", "hbar", "sushi", "cel", "chz", "dcr", "yfi", "zil", 
    "near", "amp", "ust", "tel", "qtum", "hot", "nexo", "enj", "bat", "ftm", "ont", "arrr", "btg", "one", 
    "stx", "grt", "mana", "dgb", "lusd", "hbtc", "uma", "sc", "nano", "zen", "gt", "zrx", "omg", "bnt", 
    "icx", "pax", "tusd", "steth", "rvn", "hnt", "crv", "iost", "xvs", "xsushi", "ar", "chsb", "bake", 
    "flow", "ankr", "xdc", "fei", "nxm", "rsr", "wrx", "lsk", "kcs", "husd", "1inch", "bcd", "xvg", 
    "bcha", "vgx", "lpt", "omi", "win", "lrc", "ren", "SNT", "qnt", "cusdt", "dent", "ckb", "pundix", 
    "tribe", "cfx", "bal", "rlc", "npxs", "feg", "oxy", "renbtc", "btmx", "alpha", "celo", "kobe", "erg", 
    "btcst", "mir", "reef", "ewt", "srm"
]

const simplifyTokens = (res) => {
    let newRes = [];
    res.forEach(element => {
        if (topTokens.includes(element.symbol)) {
            newRes.push(element)
        }
    });
    return newRes;
}

// export const fetchTokens = () => (dispatch) => {
//     return TokenAPIUtil.fetchTokens()
//         .then((res) => dispatch(receiveTokens(res)))
// };

export const fetchTokens = () => (dispatch) => {
    return fetch(`https://api.coingecko.com/api/v3/coins/list?include_platform=false`)
        .then(res => res.json())
        .then(res => simplifyTokens(res))
        .then((res) => dispatch(receiveTokens(res)),
        (errors) => dispatch(receiveErrors(errors.responseJSON)))
};

export const fetchToken = (tokenID) => (dispatch) => {
    return fetch(`https://api.coingecko.com/api/v3/coins/${tokenID}?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=false`
)
    .then(response => response.json())
    .then((res) => simplifyToken(res))
    .then((res) => dispatch(receiveToken(res)),
    (errors) => dispatch(receiveErrors(errors.responseJSON)))
};

// export const fetchToken = (tokenID) => (dispatch) => {
//     return TokenAPIUtil.fetchToken(tokenID)
//         .then((res) => dispatch(receiveToken(res)))
// };