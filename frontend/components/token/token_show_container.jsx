import React from 'react';
import { connect } from 'react-redux';
import { fetchToken } from '../../actions/token_actions';
import TokenShow from './token_show';

const mSTP = (state, ownProps) => {
    return {
        token: state.entities.tokens,
        orders: state.entities.users[state.session.currentUser].orders,
        transfers: state.entities.users[state.session.currentUser].transfers
        // entitites: state.entitites
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