import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USER } from '../actions/user_actions';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            // return Object.assign({}, {[action.currentUser.user.id]: action.currentUser.user });
            return Object.assign({}, { currentUser: action.currentUser.user.id });
        case RECEIVE_USER:
            // return Object.assign({}, {[action.currentUser.user.id]: action.currentUser.user });
            return Object.assign({}, { currentUser: action.user.user.id });
        default:
            return state;
    }
};

export default usersReducer;
