import { combineReducers } from "redux";
import tokensReducer from "./tokens_reducer";
import transfersReducer from "./transfers_reducer";
import usersReducer from "./users_reducer";


const entitiesReducer = combineReducers({
    users: usersReducer,
    tokens: tokensReducer,
    transfers: transfersReducer
});

export default entitiesReducer;