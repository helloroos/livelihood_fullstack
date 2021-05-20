import { connect } from 'react-redux';
// import { fetchOrders } from '../../actions/order_actions';
import { fetchTransfers, makeTransfer } from '../../actions/transfer_action';
import { fetchUser } from '../../actions/user_actions';
import Cash from './cash';

const mSTP = (state, ownProps) => {
    return {
        orders: state.entities.orders,
        transfers: state.entities.transfers,
        buyingPower: state.entities.buyingPower,
        currentUser: state.session.currentUser.id
    }
}

const mDTP = (dispatch) => {
    return {
        makeTransfer: (transferDetails) => {
            dispatch(makeTransfer(transferDetails))
        },
        fetchUser: (userId) => {
            return dispatch(fetchUser(userId))
        }
        // fetchTransfers: () => {
        //     dispatch(fetchTransfers())
        // }
        // fetchOrders: () => {
        //     dispatch(fetchOrders())
        // }
    }
}

export default connect(mSTP, mDTP)(Cash)