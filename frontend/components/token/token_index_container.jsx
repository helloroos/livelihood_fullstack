import React from 'react';
import { connect } from 'react-redux';
import { fetchTokens } from '../../actions/token_actions';
import TokenIndex from './token_index';

const mSTP = (state) => {
    return {
        tokens: state.entities.tokens
    }
}

const mDTP = (dispatch) => {
    return {
        fetchTokens: () => {
            dispatch(fetchTokens())
        }
    }
}

export default connect(mSTP, mDTP)(TokenIndex)