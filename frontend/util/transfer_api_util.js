export const makeTransfer = (transfer) => {
    return $.ajax({
        url: "/api/transfers",
        method: "POST",
        data: {
            transfer: {
                transfer_type: transfer.transfer_type,
                amount: transfer.amount,
                user_id: transfer.user_id
            }
        }
    })
}

export const fetchTransfers = () => {
    return $.ajax({
        url: '/api/transfers',
        method: "GET",
        error: (err) => console.log(err)
    })
};