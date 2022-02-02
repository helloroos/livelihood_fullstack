import React from 'react'
import DisclosureModal from './disclosure_modal';

export default function Splash6Gold({ showGold, isOpen, setIsOpen }) {
  if (!showGold) {
    return (
      <div id="splash6-info">
      </div>
    )
  } else {
    return (
      <div id="splash6-info">
        <p>Access news and advanced market data, get bigger instant fake deposits, and fake invest every day.</p>

        <button id="learn">Learn about Gold</button>

        <div id="splash6-disclosure" className="disclosures">
          <button onClick={() => setIsOpen(true)}>ⓘ Gold Disclosures</button>
        </div>

        <DisclosureModal open={isOpen} onClose={() => setIsOpen(false)}></DisclosureModal>
      </div>
    )
  }
}
