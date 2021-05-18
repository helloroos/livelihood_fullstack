import { connect } from 'react-redux';
import { logOut, resetErrors } from '../../actions/session_actions';
import NavBar from './navbar';

const mSTP = (state, ownProps) => {
    return {
        currentUser: state.session.currentUser,
        route: ownProps.location
    }
};

const mDTP = (dispatch) => {
    return {
        logOut: () => {
            return dispatch(logOut())
        },
        resetErrors: () => {
            return dispatch(resetErrors())
        }
    }
}

export default connect(mSTP, mDTP)(NavBar)