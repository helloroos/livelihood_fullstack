import React from 'react';
import { connect } from 'react-redux';
import { logIn } from '../actions/session_actions';
import SessionForm from './session_form';

const mSTP = (state, ownProps) => {
    return {
        formType: "Log In",
        errors: state.errors.session
    }
}

const mDTP = (dispatch) => {
    return {
        processForm: (user) => {
            return dispatch(logIn(user))
        }
    }
}

export default connect(mSTP, mDTP)(SessionForm);