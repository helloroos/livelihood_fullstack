import React from 'react'
import DisclosureModal from './disclosure_modal';

export default function Splash6Crypto({ showCrypto, isOpen, setIsOpen }) {
  if (!showCrypto) {
    return (
      <div id="splash6-info">
      </div>
    )
  } else {
    return (
      <div id="splash6-info">
        <p>Tap into the cryptocurrency market to buy, HODL, and sell Bitcoin, Ethereum, Dogecoin, and more, 24/7 with Robinhood Crypto.</p>

        <button id="learn">Learn about Crypto</button>

        <div id="splash6-disclosure" className="disclosures">
          <button onClick={() => setIsOpen(true)}>ⓘ Variable APY and Debit Card Disclosures</button>
        </div>

        <DisclosureModal open={isOpen} onClose={() => setIsOpen(false)}></DisclosureModal>
      </div>
    )
  }
}
