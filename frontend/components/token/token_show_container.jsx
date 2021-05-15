import React from 'react';
import { connect } from 'react-redux';
import { fetchToken } from '../../util/token_api_util';
import TokenShow from './token_show';

const mSTP = (state) => {
    return {
        id: state.entities.tokens.id,
        token: state.entities.tokens.token,
        symbol: state.entities.tokens.symbol,
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