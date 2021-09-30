import React, { useState } from 'react'

export default function TokenSidePanel({ marketPrice, buyingPower, dispatch, currentUser, tokenId }) {

  // const [number, setNumber] = useState(0)
  const [order, setOrder] = useState({
    order_type: "",
    token_sym: tokenId,
    market_price: marketPrice,
    number: 0,
    amount: 0,
    user_id: currentUser
  })

  let total = marketPrice * order.number;

  const handleOrder = (e) => {
    e.preventDefault();
    dispatch(order)
  }

  const handleWatchlist = () => {
    console.log('watchlist');
  }

  return (
    <div id="side-panel-container">
        <form onSubmit={handleOrder}> 
          <div id="header-container">
            <select onChange={(e) => setOrder({...order, order_type: e.target.value})}>
              <option>Buy</option>
              <option>Sell</option>
            </select>
          </div>
          <div id="tokens-container" className="side-panel-section">
            <p>Tokens</p>
          <input placeholder="0" required onChange={(e) => setOrder({ ...order, number: e.target.value })}/>
          </div>
          <div id="price-container" className="side-panel-section">
            <p>Market Price</p>
            <p>${marketPrice.toLocaleString('en')}</p>
          </div>
          <div id="cost-container" className="side-panel-section">
            <p>Estimated cost</p>
            <p onChange={(e) => setOrder({ ...order, amount: e.target.value })}>${total.toLocaleString('en')}</p>
          </div>
          <div id="buying-power-container" className="side-panel-section">
            <p>Buying power</p>
            <p>${buyingPower.toLocaleString('en')}</p>
          </div>
          <button>Order</button>
        </form>
      <button id="add-watchlist" onClick={handleWatchlist}>Add to watchlist</button>
    </div>
  )
}
