import React from 'react';
import { connect } from 'react-redux';
import { resetErrors, signUp } from '../../actions/session_actions';
import SignUpForm from './sign_up_form';

// const mSTP = (state, ownProps) => {
//     return {
//         formType: "Sign Up",
//         errors: state.errors.session
//     }
// }

// const mDTP = (dispatch) => {
//     return {
//         signUp: (user) => {
//             return dispatch(signUp(user))
//         },
//         resetErrors: () => {
//             return dispatch(resetErrors())
//         }
//     }
// }

const mSTP = (state) => {
    return {
        errors: state.errors.session
    }
}

const mDTP = (dispatch) => {
    return {
        signUp: (user) => {
            return dispatch(signUp(user))
        },
        resetErrors: () => {
            return dispatch(resetErrors())
        }
    }
}

export default connect(mSTP, mDTP)(SignUpForm);