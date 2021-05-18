import * as TransferAPIUtil from '../util/transfer_api_util'

export const RECEIVE_TRANSFER = "RECEIVE_TRANSFER";

const receiveTransfer = (transfer) => {
    return {
        type: RECEIVE_TRANSFER,
        transfer: transfer
    }
}

export const transfer = (transfer) => (dispatch) => {
    return TransferAPIUtil.transfer(transfer)
        .then(
            (res) => dispatch(receiveTransfer(res)),
            (errors) => dispatch(receiveErrors(errors.responseJSON)))
}