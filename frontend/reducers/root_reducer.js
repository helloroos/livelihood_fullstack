import { combineReducers } from 'redux';

import entitiesReducer from './entities_reducer';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import uiReducer from './ui_reducer';

const rootReducer = combineReducers({
    entities: entitiesReducer, 
    errors: errorsReducer,
    session: sessionReducer,
    ui: uiReducer
});

export default rootReducer;

let populatedState = {
    entities: {
        users: {
            1: {
                id: 1,
                username: 'breakfast'
            }
        }
    },
    errors: {
        session: []
    },
    session: {
        currentUser: 1
        // currentUser: null
    },
    ui: {
        modal: null
        // modal: modal
    }
}