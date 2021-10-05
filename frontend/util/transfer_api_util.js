export const makeTransfer = (transferData) => {
  return $.ajax({
    url: "/api/transfers",
    method: "POST",
    data: {
      transfer: {
        transfer_type: transferData.transfer_type,
        amount: transferData.amount,
        user_id: transferData.user_id
      }
    }
  })
}

export const fetchTransfers = () => {
  return $.ajax({
    url: '/api/transfers',
    method: "GET",
    // error: (err) => console.log(err)
  })
};