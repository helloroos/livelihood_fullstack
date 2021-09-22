import React from 'react';
import { connect } from 'react-redux';
import { logIn, resetErrors } from '../../actions/session_actions';
import LogInForm from './log_in_form';

const mSTP = (state) => {
    return {
        errors: state.errors.session
    }
}

const mDTP = (dispatch) => {
    return {
        logIn: (user) => {
            return dispatch(logIn(user))
        },
        resetErrors: () => {
            return dispatch(resetErrors())
        }
    }
}

export default connect(mSTP, mDTP)(LogInForm);

// const mSTP = (state, ownProps) => {
//     return {
//         formType: "Log In",
//         errors: state.errors.session
//     }
// }

// const mDTP = (dispatch) => {
//     return {
//         logIn: (user) => {
//             return dispatch(logIn(user))
//         },
//         resetErrors: () => {
//             return dispatch(resetErrors())
//         }
//     }
// }

// export default connect(mSTP, mDTP)(LogInForm);