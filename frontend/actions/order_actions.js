import * as OrderAPIUtil from '../util/order_api_util'
import { GET_USER_INFO } from './user_actions';

export const MAKE_ORDER = "MAKE_ORDER";
// export const RECEIVE_ORDER = "RECEIVE_ORDER";
export const RECEIVE_ORDERS = "RECEIVE_ORDERS";

// const makeOrderAction = (order) => {
//   return {
//     type: MAKE_ORDER,
//     // type: RECEIVE_ORDER,
//     order: order
//   }
// }

const makeOrderAction = (order) => {
  return {
    type: GET_USER_INFO,
    // type: RECEIVE_ORDER,
    user: order
  }
}

const receiveOrders = (orders) => {
  return {
    type: RECEIVE_ORDERS,
    orders: orders
  }
}

export const makeOrder = (orderDetails) => (dispatch) => {
  return OrderAPIUtil.makeOrder(orderDetails)
    .then(
      (res) => dispatch(makeOrderAction(res)),
      (errors) => dispatch(makeOrderAction(errors.responseJSON)))
}

export const fetchOrders = (orderDetails) => (dispatch) => {
  return OrderAPIUtil.fetchOrders(orderDetails)
    .then(
      (res) => dispatch(receiveOrders(res)),
      (errors) => dispatch(receiveOrder(errors.responseJSON)))
}