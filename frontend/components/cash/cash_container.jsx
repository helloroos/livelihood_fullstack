import { connect } from 'react-redux';
// import { fetchOrders } from '../../actions/order_actions';
import { fetchTransfers, makeTransfer } from '../../actions/transfer_action';
import Cash from './cash';

const mSTP = (state, ownProps) => {
    return {
        orders: state.entities.orders,
        transfers: state.entities.transfers,
    }
}

const mDTP = (dispatch) => {
    return {
        makeTransfer: (transferDetails) => {
            dispatch(makeTransfer(transferDetails))
        },
        fetchTransfers: () => {
            dispatch(fetchTransfers())
        }
        // fetchOrders: () => {
        //     dispatch(fetchOrders())
        // }
    }
}

export default connect(mSTP, mDTP)(Cash)