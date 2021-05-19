export const fetchTokens = () => {
    return $.ajax({
        url: '/api/tokens',
        method: "GET",
        error: (err) => console.log(err)
    })
};

export const fetchToken = (tokenId) => {
    return $.ajax({
        url: `/api/tokens/${tokenId}`,
        method: "GET",
        error: (err) => console.log(err)
    })
};