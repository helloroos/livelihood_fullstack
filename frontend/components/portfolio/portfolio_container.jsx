import React from 'react';
import { connect } from 'react-redux';
import { fetchToken } from '../../actions/token_actions';
import { fetchUser } from '../../actions/user_actions';
import Portfolio from './portfolio';

const mSTP = (state) => {
    return {
        transfers: Object.values(state.entities.transfers),
        orders: Object.values(state.entities.orders),
        buyingPower: state.entities.buyingPower,
        currentUser: state.session.currentUser.id,
        tokens: state.entities.tokens,
        token: state.entities.token
    }
}

const mDTP = (dispatch) => {
    return {
        fetchUser: (userId) => {
            return dispatch(fetchUser(userId))
        },
        fetchToken: (tokenId) => {
            return dispatch(fetchToken(tokenId))
        },
        fetchTokens: () => {
            return dispatch(fetchTokens())
        }
    }
}

export default connect(mSTP, mDTP)(Portfolio)