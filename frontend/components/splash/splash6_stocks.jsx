import React from 'react'
import DisclosureModal from './disclosure_modal';

export default function Splash6Stocks({ showStocks, isOpen, setIsOpen }) {
  if (!showStocks) {
    return (
      <div id="splash6-info">
      </div>
    )
  } else {
    return (
      <div id="splash6-info">
        <p>Get mobile access to the markets. Invest commission-free (since it's all fake) in individual blockchains or bundles of investments.</p>

        <button id="learn">Learn about Blockchains</button>

        <div id="splash6-disclosure" className="disclosures">
          <button onClick={() => setIsOpen(true)}>ⓘ Blockchain Disclosures</button>
        </div>

        <DisclosureModal open={isOpen} onClose={() => setIsOpen(false)}></DisclosureModal>
      </div>
    )
  }
}
