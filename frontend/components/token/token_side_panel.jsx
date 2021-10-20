import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function TokenSidePanel({ marketPrice, buyingPower, dispatch, tokenId, currentUser, order, setOrder, handleOrder, changeOption, total }) {

  return (
    <div id="side-panel-container">
        <form onSubmit={handleOrder}> 
          <div id="header-container">
            <select onChange={(e) => changeOption(e.target.value)}>
              <option value="Buy">Buy</option>
              <option value="Sell">Sell</option>
            </select>
          </div>
          <div id="tokens-container" className="side-panel-section">
            <p>Tokens</p>
          {/* <input type="text" placeholder="0" required onChange={(e) => setOrder({ ...order, number: e.target.value, amount: marketPrice * order.number})}/> */}
          <input type="text" placeholder={order.number} required onChange={(e) => setOrder({ ...order, number: e.target.value, amount: marketPrice * order.number})}/>
          </div>
          <div id="price-container" className="side-panel-section">
            <p>Market Price</p>
            {/* <input readOnly="readOnly" type="text" value={marketPrice.toLocaleString('en')} onChange={(e) => setOrder({ ...order, market_price: e.target.value })} /> */}
            <p>${marketPrice.toLocaleString('en')}</p>
          </div>
          <div id="cost-container" className="side-panel-section">
            <p>Estimated cost</p>
          {/* <input type="text" placeholder="0" required value={total.toLocaleString('en')} onChange={(e) => setOrder({ ...order, amount: e.target.value })} readOnly="readOnly" /> */}
            <p>${total.toLocaleString('en')}</p>
            {/* <p onChange={(e) => setOrder({ ...order, amount: total })}>${total.toLocaleString('en')}</p> */}
          </div>
          <div id="buying-power-container" className="side-panel-section">
            <p>Buying power</p>
            {/* <input readOnly="readOnly" type="text" value={buyingPower.toLocaleString('en')}  /> */}
            <p>${buyingPower.toLocaleString('en')}</p>
          </div>
          <button id={order.number ? 'green' : 'gray'}>Order</button>
        </form>
      {/* <button id="add-watchlist" onClick={handleWatchlist}>Add to watchlist</button> */}
    </div>
  )
}
