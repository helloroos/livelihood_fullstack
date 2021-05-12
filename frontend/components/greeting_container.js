import { connect } from 'react-redux';
import { logOut } from '../actions/session_actions';
import Greeting from './greeting';

// const mSTP = ({ session, entities: { users } }) => {
const mSTP = (state) => {
    return {
        // currentUser: users[session.id]
        currentUser: state.session.currentUser
    }
}

// let state = {
//     session: {
//         currentUser: {
//             id: 1,
//             email: "groot"
//         }
//     }
// }

const mDTP = (dispatch) => {
    return {
        logOut: () => {
            dispatch(logOut())
        }
    }
}

export default connect(mSTP, mDTP)(Greeting);