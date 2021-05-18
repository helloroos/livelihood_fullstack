import React from 'react';
import { connect } from 'react-redux';
import { order } from '../../actions/order_actions';
import { fetchToken } from '../../actions/token_actions';
import TokenShow from './token_show';

const mSTP = (state, ownProps) => {
    return {
        token: state.entities.tokens,
        orders: state.entities.orders,
        transfers: state.entities.transfers,
    }
}

const mDTP = (dispatch) => {
    return {
        fetchToken: (tokenId) => {
            dispatch(fetchToken(tokenId))
        },
        order: (orderDetails) => {
            dispatch(order(orderDetails))
        }
    }
}

export default connect(mSTP, mDTP)(TokenShow)