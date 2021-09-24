import React from 'react'
import DisclosureModal from './disclosure_modal';

export default function Splash6Gold({ showGold, isOpen, setIsOpen }) {
  if (!showGold) {
    return null;
  } else {
    return (
      <div id="splash6-info">
        <p>Access research reports and advanced market data, get bigger instant deposits, and borrow money at a 2.5% interest rate if eligible—all for $5 per month.</p>

        <button id="learn">Learn about Gold</button>

        <div id="splash6-disclosure" className="disclosures">
          <button onClick={() => setIsOpen(true)}>ⓘ Variable APY and Debit Card Disclosures</button>
        </div>

        <DisclosureModal open={isOpen} onClose={() => setIsOpen(false)}></DisclosureModal>
      </div>
    )
  }
}
