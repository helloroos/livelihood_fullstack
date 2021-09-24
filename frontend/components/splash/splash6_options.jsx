import React from 'react'
import DisclosureModal from './disclosure_modal';

export default function Splash6Options({ showOptions, isOpen, setIsOpen }) {
  if (!showOptions) {
    return null;
  } else {
    return (
      <div id="splash6-info">
        <p>Be bullish on stocks you believe in and bearish on the ones you don’t. It’s your call.</p>

        <button id="learn">Learn about Options</button>

        <div id="splash6-disclosure" className="disclosures">
          <button onClick={() => setIsOpen(true)}>ⓘ Variable APY and Debit Card Disclosures</button>
        </div>

        <DisclosureModal open={isOpen} onClose={() => setIsOpen(false)}></DisclosureModal>
      </div>
    )
  }
}
