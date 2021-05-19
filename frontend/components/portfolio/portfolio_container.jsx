import React from 'react';
import { connect } from 'react-redux';
import { fetchOrders } from '../../actions/order_actions';
import { fetchTransfers } from '../../actions/transfer_action';
import { fetchUser } from '../../actions/user_actions';
import Portfolio from './portfolio';

const mSTP = (state) => {
    return {
        transfers: state.entities.transfers,
        orders: state.entities.orders,
        buyingPower: state.entities.buyingPower.buyingPower,
        currentUser: state.session.currentUser.id
    }
}

const mDTP = (dispatch) => {
    return {
        fetchUser: (userId) => {
            return dispatch(fetchUser(userId))
        }
    }
}

export default connect(mSTP, mDTP)(Portfolio)