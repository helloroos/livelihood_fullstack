import React from 'react'
import DisclosureModal from './disclosure_modal';

export default function Splash6Cash({showCash, isOpen, setIsOpen}) {
  if (!showCash) {
    return null;
  } else {
    return (
      <div id="splash6-info">
        <p>Earn 0.30% APY* on your uninvested cash and get more flexibility with your brokerage account.</p>
  
        <button id="learn">Learn about Cash Management</button>
  
        <div id="splash6-disclosure" className="disclosures">
          <button onClick={() => setIsOpen(true)}>ⓘ Variable APY and Debit Card Disclosures</button>
        </div>
  
        <DisclosureModal open={isOpen} onClose={() => setIsOpen(false)}></DisclosureModal>
      </div>
    )
  }
}
