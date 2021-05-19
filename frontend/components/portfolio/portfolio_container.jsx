import React from 'react';
import { connect } from 'react-redux';
import { fetchOrders } from '../../actions/order_actions';
import { fetchTransfers } from '../../actions/transfer_action';
import Portfolio from './portfolio';


const mSTP = (state) => {
    return {
        transfers: state.entities.transfers,
        orders: state.entities.orders,
        // buyingPower: state
        // currentUser: state.session.currentUser.id
    }
}

const mDTP = (dispatch) => {
    return {
        fetchTransfers: () => {
            return dispatch(fetchTransfers())
        },
        fetchOrders: () => {
            return dispatch(fetchOrders())
        }
    }
}

export default connect(mSTP, mDTP)(Portfolio)