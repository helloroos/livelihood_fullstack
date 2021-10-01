import React, { useState } from 'react';
import { useSelector } from 'react-redux';

export default function TokenSidePanel({ marketPrice, buyingPower, dispatch, tokenId }) {

  // const currentUser = useSelector((state) => state.session.currentUser.id)
  const currentUser = useSelector((state) => state.session.currentUserId)

  const [order, setOrder] = useState({
    order_type: 'Buy',
    token_sym: 'Havven',
    // market_price: marketPrice,
    market_price: 10,
    number: 5,
    amount: 50,
    user_id: currentUser
  })

  let total = marketPrice * order.number;

  const handleOrder = (e) => {
    e.preventDefault();
    console.log(order);
    dispatch(makeOrder(order))
  }

  const changeOption = (val) => {
    if (val === 'sell') {
      setOrder({ ...order, order_type: 'Sell' })
    }
  }

  // const handleWatchlist = () => {
  //   console.log('watchlist');
  // }

  return (
    <div id="side-panel-container">
        <form onSubmit={handleOrder}> 
          <div id="header-container">
            <select onChange={(e) => changeOption(e.target.value)}>
              <option value="buy">Buy</option>
              <option value="sell">Sell</option>
            </select>
          </div>
          <div id="tokens-container" className="side-panel-section">
            <p>Tokens</p>
          <input type="text" placeholder="0" required onChange={(e) => setOrder({ ...order, number: e.target.value })}/>
          </div>
          <div id="price-container" className="side-panel-section">
            <p>Market Price</p>
            <p>${marketPrice.toLocaleString('en')}</p>
          </div>
          <div id="cost-container" className="side-panel-section">
            <p>Estimated cost</p>
            <p onChange={(e) => setOrder({ ...order, amount: total })}>${total.toLocaleString('en')}</p>
          </div>
          <div id="buying-power-container" className="side-panel-section">
            <p>Buying power</p>
            <p>${buyingPower.toLocaleString('en')}</p>
          </div>
          <button id={order.number ? 'green' : 'gray'}>Order</button>
        </form>
      {/* <button id="add-watchlist" onClick={handleWatchlist}>Add to watchlist</button> */}
    </div>
  )
}
