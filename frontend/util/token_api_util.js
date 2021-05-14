export const fetchTokens = () => {
    return $.ajax({
        url: '/api/tokens',
        error: (err) => console.log(err)
    })
};

export const fetchToken = (tokenId) => {
    return $.ajax({
        url: `/api/tokens/${tokenId}`,
        error: (err) => console.log(err)
    })
};