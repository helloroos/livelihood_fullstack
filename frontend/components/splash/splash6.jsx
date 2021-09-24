import React from 'react';
import DisclosureModal from './disclosure_modal';

export default function Splash6({ isOpen, setIsOpen }) {
  return (
    <div id="splash6-container">
      <div id="splash6-inner-container">
        <div id="splash6-text">
          <h2>Our Products</h2>
          <div id="splash6-buttons">
            <button>Cash Management</button>
            <button>Stocks & Funds</button>
            <button>Options</button>
            <button>Gold</button>
            <button>Crypto</button>
          </div>
          <div id="splash6-info">
            <p>Earn 0.30% APY* on your uninvested cash and get more flexibility with your brokerage account.</p>
          </div>
          <button id="learn">Learn about Cash Management</button>
          <div id="splash6-disclosure" className="disclosures">
            <button onClick={() => setIsOpen(true)}>ⓘ Variable APY and Debit Card Disclosures</button>
          </div>
          <DisclosureModal open={isOpen} onClose={() => setIsOpen(false)}></DisclosureModal>

        </div>
        <div id="splash6-img">
          <img src="https://robinhood.com/us/en/_next/static/images/1x__ea42f9545c170fe8354ebde19dcefbc0.png" alt="cash-mgmt" />
        </div>
      </div>
    </div>
  )
}
