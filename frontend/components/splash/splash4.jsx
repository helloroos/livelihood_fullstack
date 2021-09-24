import React from 'react';
import DisclosureModal from './disclosure_modal';

export default function Splash4({ isOpen, setIsOpen}) {
  return (
    <div id="splash4-container">
      <div id="splash4-text-container">
        <div id="splash4-header">
          <h2>Introducing Fractional Shares</h2>
          <p>Invest in thousands of stocks with as little as $1.</p>
        </div>

        <div id="splash4-sections-container">
          <div id="splash4-sec1" className="splash4-sections">
            <h3>Invest Any Amount</h3>
            <p>Choose how much you want to invest, and we’ll convert from dollars to parts of a whole share.</p>
          </div>
          <div id="splash4-sec2" className="splash4-sections">
            <h3>Build a Balanced Portfolio</h3>
            <p>Customize your portfolio with pieces of different companies and funds to help reduce risk.</p>
          </div>
          <div id="splash4-sec3" className="splash4-sections">
            <h3>Trade in Real Time</h3>
            <p>Trades placed during market hours are executed at that time, so you’ll always know the share price.</p>
          </div>
        </div>

        <div id="splash4-disclosure" className="disclosures">
          <button onClick={() => setIsOpen(true)}>ⓘ Fractional Shares Disclosure</button>
        </div>
        <DisclosureModal open={isOpen} onClose={() => setIsOpen(false)}></DisclosureModal>
      </div>

      <div id="splash4-img-container">
        <img src={window.frac_shares} alt="fractional_shares" />
      </div>

    </div>
  )
}
