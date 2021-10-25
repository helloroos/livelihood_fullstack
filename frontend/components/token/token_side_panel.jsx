import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function TokenSidePanel({ marketPrice, buyingPower, dispatch, tokenId, currentUser, number, setNumber, order, setOrder, handleOrder, changeOption, total, buy }) {

  const orderButton = () => {
    return (
      <button className={order.number ? 'green' : 'gray'}>{buy ? 'Order' : 'Sell'}</button>
    )
  }

  const transferFundsButton = () => {
    return (
      <div id="warning">
        {/* <div id="header">
          ⓘ Not Enough Buying Power
        </div> */}
        <Link to="/cash"><button id="deposit-funds" className="green">Deposit Funds</button></Link>
        {/* <button id="dismiss">Dismiss</button> */}
      </div>
    )
  }

  const buyValue = () => {
    return (
      order.amount > buyingPower ? transferFundsButton() : orderButton()
    )
  }

  const sellValue = () => {
    return (
      orderButton()
    )
  }

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
          <input type="text" placeholder="0" required onChange={(e) => setOrder({ ...order, number: parseInt(e.target.value), amount: marketPrice * e.target.value })} value={order.number > 0 ? order.number : number } />
          </div>
          <div id="price-container" className="side-panel-section">
            <p>Market Price</p>
            <p>${marketPrice.toLocaleString('en')}</p>
          </div>
          <div id="cost-container" className="side-panel-section">
            <p>Total value</p>
            <p>${isNaN(total) ? 0 : total.toLocaleString('en')}</p>
          </div>
          <div id="buying-power-container" className="side-panel-section">
            <p>Buying power</p>
            <p>${parseInt(buyingPower.toLocaleString('en'))}</p>
          </div>
          {buy ? buyValue() : sellValue()}
          {/* {order.amount > buyingPower ? transferFundsButton() : orderButton()} */}
        </form>
      {/* <button id="add-watchlist" onClick={handleWatchlist}>Add to watchlist</button> */}
    </div>
  )
}
