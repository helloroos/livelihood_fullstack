import React from 'react';
import DisclosureModal from './disclosure_modal';

export default function Splash3({ isOpen, setIsOpen }) {
  return (
    <div id="splash3-container">
      <div id="splash3-img-container">

        <img src="https://robinhood.com/us/en/_next/static/images/balloon__ef7d8a9bb1c7845fcb7a6799c35d513e.svg" alt="balloon" />
      </div>

      <div id="splash3-text-container">
        <div id="splash3-header">
          <h2>Introducing NFT access</h2>
          <p>Get started today with an NFT and become one of the first fake investors.</p>
        </div>

        <div id="splash3-bullets">

          <img src="https://robinhood.com/us/en/_next/static/images/comeall__c29b103566f44e51d624989e65ecf3be.svg" id="turn-img" alt="bullet-image" />
          <div className="bullet-text" id="turn-text">
            <h3>It's your turn</h3>
            <p>No minimum account balances or special status requirements.</p>
          </div>

          <img src="https://robinhood.com/us/en/_next/static/images/one-first__d86b9ee63a8475364159f2d21ea5f01f.svg" id="first-img" alt="bullet-image" />
          <div className="bullet-text" id="first-text">
            <h3>Be one of the first</h3>
            <p>Request NFTs before they start trading on public Exchanges.</p>
          </div>

          <img src="https://robinhood.com/us/en/_next/static/images/fair-shot__fb09db580d0ada2e8626a6e46094bb27.svg" id="shot-img" alt="bullet-image" />
          <div className="bullet-text" id="shot-text">
            <h3>Get a fair shot</h3>
            <p>While NFTs are limited, NFT Access gives you the same opportunity to (not) invest, regardless of order size or account value.</p>
          </div>
        </div>

        <div id="splash3-disclosure" className="disclosures">
          <button onClick={() => setIsOpen(true)}>ⓘ NFT Access Disclosure</button>
        </div>
        <DisclosureModal open={isOpen} onClose={() => setIsOpen(false)}></DisclosureModal>
        <div id="splash3-header">

        </div>
      </div>
    </div>
  )
}
