export const transfer = (transfer) => {
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