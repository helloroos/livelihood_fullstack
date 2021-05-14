import { combineReducers } from "redux";
import tokensReducer from "./tokens_reducer";
import usersReducer from "./users_reducer";


const entitiesReducer = combineReducers({
    users: usersReducer,
    tokens: tokensReducer
});

export default entitiesReducer;