import * as TransferAPIUtil from '../util/transfer_api_util'
import { GET_USER_INFO } from './user_actions';

// ACTION VERBS
export const MAKE_TRANSFER = "MAKE_TRANSFER";
export const RECEIVE_TRANSFERS = "RECEIVE_TRANSFERS";

// ACTIONS - POJOS
const makeTransferAction = (transfer) => {
  return {
    type: GET_USER_INFO, // type
    user: transfer // payload
  }
}

const receiveTransfers = (transfers) => {
  return {
    type: RECEIVE_TRANSFERS,
    transfers: transfers
  }
}

// ACTION CREATORS
export const makeTransfer = (transferDetails) => (dispatch) => {
  return TransferAPIUtil.makeTransfer(transferDetails) // ajax
    .then(
      (res) => dispatch(makeTransferAction(res))) // send to store
}

export const fetchTransfers = (transferDetails) => (dispatch) => {
  return TransferAPIUtil.fetchTransfers(transferDetails)
    .then(
      (res) => dispatch(receiveTransfers(res)))
}