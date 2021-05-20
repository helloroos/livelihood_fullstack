import React from 'react';
import { connect } from 'react-redux';
import { fetchOrders, makeOrder } from '../../actions/order_actions';
import { fetchToken } from '../../actions/token_actions';
import { fetchTransfers } from '../../actions/transfer_action';
import TokenShow from './token_show';

const mSTP = (state, ownProps) => {
    return {
        token: state.entities.tokens.token,
        orders: state.entities.orders,
        transfers: state.entities.transfers,
    }
}

const mDTP = (dispatch) => {
    return {
        fetchToken: (tokenId) => {
            dispatch(fetchToken(tokenId))
        },
        makeOrder: (orderDetails) => {
            dispatch(makeOrder(orderDetails))
        },
        fetchOrders: () => {
            dispatch(fetchOrders())
        },
        fetchTransfers: () => {
            dispatch(fetchTransfers())
        }
    }
}

export default connect(mSTP, mDTP)(TokenShow)