import React from 'react';
import { connect } from 'react-redux';
import { fetchTransfers } from '../../actions/transfer_action';
import Portfolio from './portfolio';


const mSTP = (state) => {
    return {
        transfers: state.entities.transfers,
        orders: state.entities.orders
    }
}

const mDTP = (dispatch) => {
    return {
        fetchTransfers: () => {
            return dispatch(fetchTransfers())
        }
    }
}

export default connect(mSTP, mDTP)(Portfolio)