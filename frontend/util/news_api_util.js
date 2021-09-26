export const fetchNews = () => {
  return $.ajax({
    url: '/api/orders',
    method: "GET",
    error: (err) => console.log(err)
  })
};