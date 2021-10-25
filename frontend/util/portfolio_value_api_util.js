export const updateDailyValue = (payload) => {
  return $.ajax({
    url: "/api/portfolio_values",
    method: "POST",
    data: {
      portfolio_value: {
        amount: payload.amount,
        user_id: payload.user_id
      }
    }
  })
}

export const fetchPortfolioValues = () => {
  return $.ajax({
    url: '/api/portfolio_values',
    method: "GET",
    // error: (err) => console.log(err)
  })
};