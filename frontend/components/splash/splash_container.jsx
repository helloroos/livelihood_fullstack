import { connect } from 'react-redux';
import Splash from './splash';

const mSTP = (state, ownProps) => {
    return {
        currentUser: state.session.currentUser
    }
};

const mDTP = (dispatch) => {
    return {
        logOut: () => {
            return dispatch(logOut())
        }
    }
};

export default connect(mSTP, mDTP)(Splash)