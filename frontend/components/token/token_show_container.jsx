import React from 'react';
import { connect } from 'react-redux';
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

    }
}

export default connect(mSTP, mDTP)(TokenShow)