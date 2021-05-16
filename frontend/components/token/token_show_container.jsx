import React from 'react';
import { connect } from 'react-redux';
import { fetchToken } from '../../actions/token_actions';
import TokenShow from './token_show';

const mSTP = (state, ownProps) => {
    return {
        // id: state.entities.tokens.id.id,
        token: state.entities.tokens
        // symbol: state.entities.tokens.id.symbol,
    }
}

const mDTP = (dispatch) => {
    return {
        fetchToken: (tokenId) => {
            dispatch(fetchToken(tokenId))
        }
    }
}

export default connect(mSTP, mDTP)(TokenShow)