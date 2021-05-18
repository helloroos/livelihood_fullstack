import { connect } from 'react-redux';
import { transfer } from '../../actions/transfer_action';
import Cash from './cash';

const mSTP = (state, ownProps) => {
    return {
        orders: state.entities.orders,
        transfers: state.entities.transfers,
    }
}

const mDTP = (dispatch) => {
    return {
        transfer: (transferDetails) => {
            dispatch(transfer(transferDetails))
        }
    }
}

export default connect(mSTP, mDTP)(Cash)