import { connect } from 'react-redux';
import { logOut } from '../actions/session_actions';
import Greeting from './greeting';

const mSTP = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id]
    }
}

const mDTP = (dispatch) => {
    return {
        logOut: () => {
            dispatch(logOut())
        }
    }
}

export default connect(mSTP, mDTP)(Greeting);