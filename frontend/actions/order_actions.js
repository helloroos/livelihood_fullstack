import * as OrderAPIUtil from '../util/order_api_util'

export const RECEIVE_ORDER = "RECEIVE_ORDER";

const receiveOrder = (order) => {
    return {
        type: RECEIVE_ORDER,
        order: order
    }
}

export const order = (order) => (dispatch) => {
    return OrderAPIUtil.order(order)
        .then(
            (res) => dispatch(receiveOrder(res)),
            (errors) => dispatch(receiveOrder(errors.responseJSON)))
}