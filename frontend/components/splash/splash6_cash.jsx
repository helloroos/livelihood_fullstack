import React from 'react'
import DisclosureModal from './disclosure_modal';

export default function Splash6Cash({showCash, isOpen, setIsOpen}) {
  if (!showCash) {
    return (
      <div id="splash6-info">
      </div>
    )
  } else {
    return (
      <div id="splash6-info">
        <p>Earn 0.00% return on your uninvested cash and get more flexibility with your account.</p>
  
        <button id="learn">Learn about Cash Management</button>
  
        <div id="splash6-disclosure" className="disclosures">
          <button onClick={() => setIsOpen(true)}>ⓘ Return and Cash Disclosures</button>
        </div>
  
        <DisclosureModal open={isOpen} onClose={() => setIsOpen(false)}></DisclosureModal>
      </div>
    )
  }
}
