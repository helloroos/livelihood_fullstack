import React, { useState } from 'react'

export default function TokenSidePanel({ marketPrice, buyingPower }) {

  const [number, setNumber] = useState(0)
  let total = marketPrice * number;

  return (
    <div id="side-panel-container">
        <form> 
          <div id="header-container">
            <select>
              <option>Buy</option>
              <option>Sell</option>
            </select>
          </div>
          <div id="tokens-container" className="side-panel-section">
            <p>Tokens</p>
          <input placeholder="0" required onChange={(e) => setNumber(e.target.value)}/>
          </div>
          <div id="price-container" className="side-panel-section">
            <p>Market Price</p>
            <p>${marketPrice.toLocaleString('en')}</p>
          </div>
          <div id="cost-container" className="side-panel-section">
            <p>Estimated cost</p>
            <p>${total.toLocaleString('en')}</p>
          </div>
          <div id="buying-power-container" className="side-panel-section">
            <p>Buying power</p>
            <p>${buyingPower.buyingPower.toLocaleString('en')}</p>
          </div>
          <button>Order</button>
        </form>
      <button id="add-watchlist">Add to watchlist</button>
    </div>
  )
}
