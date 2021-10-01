import { combineReducers } from "redux";
import buyingPowerReducer from "./buying_power_reducer";
import ordersReducer from "./orders_reducer";
import tokensReducers from "./tokens_reducer";
import transfersReducer from "./transfers_reducer";
import newsReducer from "./news_reducer";
import tokensHeldReducer from "./tokens_held_reducer";
// import usersReducer from "./users_reducer";

const entitiesReducer = combineReducers({
    buyingPower: buyingPowerReducer,
    news: newsReducer,
    orders: ordersReducer,
    tokens: tokensReducers,
    tokensHeld: tokensHeldReducer,
    transfers: transfersReducer,
});

export default entitiesReducer;