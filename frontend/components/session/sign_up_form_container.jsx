import React from 'react';
import { signUp } from '../../actions/session_actions';
import SignUpForm from './sign_up_form';
import { connect } from 'react-redux';

const mSTP = (state, ownProps) => {
    return {
        formType: "Sign Up",
        errors: state.errors.session
    }
}

const mDTP = (dispatch) => {
    return {
        processForm: (user) => {
            return dispatch(signUp(user))
        }
    }
}

export default connect(mSTP, mDTP)(SignUpForm);