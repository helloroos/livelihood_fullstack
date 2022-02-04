import * as TransferAPIUtil from '../util/transfer_api_util'
import { GET_USER_INFO } from './user_actions';

export const MAKE_TRANSFER = "MAKE_TRANSFER";
export const RECEIVE_TRANSFERS = "RECEIVE_TRANSFERS";

const makeTransferAction = (transfer) => {
  return {
    type: GET_USER_INFO,
    user: transfer
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
      (res) => dispatch(makeTransferAction(res)))
}

export const fetchTransfers = (transferDetails) => (dispatch) => {
  return TransferAPIUtil.fetchTransfers(transferDetails)
    .then(
      (res) => dispatch(receiveTransfers(res)))
}