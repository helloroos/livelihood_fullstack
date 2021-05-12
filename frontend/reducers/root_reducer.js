import { combineReducers } from 'redux';

import entitiesReducer from './entities_reducer';
// import ui from './ui_reducer';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';

const rootReducer = combineReducers({
    entities: entitiesReducer, 
    errors: errorsReducer,
    session: sessionReducer,
});

export default rootReducer;

let emptyState = {
    entities: {
        users: {}
    },
    session: {
        // id: null,
        currentUser: null,
    },
    errors: {
        session: ["Invalid credentials"]
    }
}

let populatedState = {
    entities: {
        users: {
            1: {
                id: 1,
                username: 'breakfast'
            }
        }
    },
    session: {
        // id: 1
        currentUser: 1
    },
    errors: {
        session: []
    }
}