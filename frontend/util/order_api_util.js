export const makeOrder = (order) => {
    return $.ajax({
        url: "/api/orders",
        method: "POST",
        data: {
            order: {
                order_type: order.order_type,
                token_sym: order.token_sym,
                market_price: order.market_price,
                number: order.number,
                amount: order.amount,
                user_id: order.user_id
            }
        }
    })
}

export const fetchOrders = () => {
    return $.ajax({
        url: '/api/orders',
        method: "GET",
        error: (err) => console.log(err)
    })
};