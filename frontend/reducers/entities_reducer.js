import { combineReducers } from "redux";
import buyingPowerReducer from "./buying_power_reducer";
import ordersReducer from "./orders_reducer";
import tokensReducers from "./tokens_reducer";
import transfersReducer from "./transfers_reducer";
// import newsReducer from "./_news_reducer";
import tokensHeldReducer from "./tokens_held_reducer";
// import usersReducer from "./users_reducer";
import portfolioReducer from './portfolio_reducer'

const entitiesReducer = combineReducers({
    buyingPower: buyingPowerReducer,
    // news: newsReducer,
    orders: ordersReducer,
    portfolioValue: portfolioReducer,
    tokenInfo: tokensReducers,
    tokensHeld: tokensHeldReducer,
    transfers: transfersReducer,
});

export default entitiesReducer;