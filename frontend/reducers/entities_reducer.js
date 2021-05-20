import { combineReducers } from "redux";
import buyingPowerReducer from "./buying_power_reducer";
import ordersReducer from "./orders_reducer";
import tokensReducers from "./tokens_reducer";
import transfersReducer from "./transfers_reducer";
// import usersReducer from "./users_reducer";

const entitiesReducer = combineReducers({
    // currentUser: usersReducer,
    tokens: tokensReducers,
    transfers: transfersReducer,
    orders: ordersReducer,
    buyingPower: buyingPowerReducer,
});

export default entitiesReducer;