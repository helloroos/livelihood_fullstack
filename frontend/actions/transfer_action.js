import * as TransferAPIUtil from '../util/transfer_api_util'

export const RECEIVE_TRANSFER = "RECEIVE_TRANSFER";
export const RECEIVE_TRANSFERS = "RECEIVE_TRANSFERS";

const receiveTransfer = (transfer) => {
  return {
    type: RECEIVE_TRANSFER,
    transfer: transfer
  }
}

const receiveTransfers = (transfers) => {
  return {
    type: RECEIVE_TRANSFERS,
    transfers: transfers
  }
}

export const makeTransfer = (transferDetails) => (dispatch) => {
  return TransferAPIUtil.makeTransfer(transferDetails)
    .then(
      (res) => dispatch(receiveTransfer(res)))
  // (errors) => dispatch(receiveErrors(errors.responseJSON)))
}

export const fetchTransfers = (transferDetails) => (dispatch) => {
  return TransferAPIUtil.fetchTransfers(transferDetails)
    .then(
      (res) => dispatch(receiveTransfers(res)))
  // (errors) => dispatch(receiveErrors(errors.responseJSON)))
}