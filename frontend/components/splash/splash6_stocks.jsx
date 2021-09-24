import React from 'react'
import DisclosureModal from './disclosure_modal';

export default function Splash6Stocks({ showStocks, isOpen, setIsOpen }) {
  if (!showStocks) {
    return null;
  } else {
    return (
      <div id="splash6-info">
        <p>Get mobile access to the markets. Invest commission-free in individual companies or bundles of investments (ETFs).</p>

        <button id="learn">Learn about Stocks & Funds</button>

        <div id="splash6-disclosure" className="disclosures">
          <button onClick={() => setIsOpen(true)}>ⓘ Variable APY and Debit Card Disclosures</button>
        </div>

        <DisclosureModal open={isOpen} onClose={() => setIsOpen(false)}></DisclosureModal>
      </div>
    )
  }
}
