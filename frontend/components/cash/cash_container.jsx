import { connect } from 'react-redux';
import { transmakeTransferfer } from '../../actions/transfer_action';
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
        }
    }
}

export default connect(mSTP, mDTP)(Cash)