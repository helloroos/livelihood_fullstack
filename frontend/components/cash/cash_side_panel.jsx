import React from 'react'

export default function CashSidePanel() {
  return (
    <div id="side-panel-container">
      <h3>Transfer</h3>
      <form>
        <div id="from" className="options">
          <p>From</p>
          <div className="select-container">
            <select name="from" id="from-select">
              <option value="universal-bank">Universal Bank</option>
              <option value="robinhodl">Robinhodl</option>
            </select>
          </div>
        </div>


        <div id="to" className="options">
          <p>To</p>
          <div className="select-container">
            <select name="from" id="from-select">
              <option value="robinhodl">Robinhodl</option>
              <option value="universal-bank">Universal Bank</option>
            </select>
          </div>
        </div>

        <div id="amount" className="options">
          <p>Amount</p>
          <input type="text" placeholder="$0.00"/>
        </div>
        <button>Transfer</button>
      </form>
    </div>
  )
}
