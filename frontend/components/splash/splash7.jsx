import React from 'react';
import DisclosureModal from './disclosure_modal';

export default function Splash7({ isOpen, setIsOpen }) {
  return (
    <div id="splash7-container">
      <div id="splash7-inner-container">

        <div id="footer-links">
          <div id="links">
            <div id="col1" className="cols">
              <p>Stocks & Funds</p>
              <p>Options</p>
              <p>Gold</p>
              <p>Cash Management</p>
              <p>Crypto</p>
            </div>
            <div id="col2" className="cols">
              <p>Learn</p>
              <p>Support</p>
              <p>Snacks</p>
            </div>
            <div id="col3" className="cols">
              <p>About us</p>
              <p>Careers</p>
              <p>Affiliates</p>
              <p>Blog</p>
              <p>Investor Relations</p>
              <div id="contact-icons">
                <i className="fab fa-linkedin"></i>
                <i className="fab fa-github-square"></i>
                <i className="far fa-file"></i>
                <i className="far fa-user"></i>
              </div>
            </div>
          </div>

          <div id="snacks">
            <img src={window.snacks} alt="snacks" />
            <p>The 3-minute newsletter with fresh takes on the financial news you need to start your day.</p>
            <div id="email-container">
              <input type="text" placeholder="email@email.com" />
              <button>Get in touch</button>
            </div>

          </div>
        </div>

        <div id="tandcs">
          <a href="#" target="_blank">Check the background of the firm on FINRA’s BrokerCheck</a>
          <a href="#" target="_blank">Brokerage Customer Relationship Summary</a>
          <a href="#" target="_blank">Robinhodl Terms & Conditions</a>
          <a href="#" target="_blank">Disclosure Library</a>
          <a href="#" target="_blank">Privacy</a>
        </div>
        <div id="rights">
          <p>© 2021 Robinhodl. All rights reserved.</p>
          <p>Robinhodl means Robinhodl Markets and its in-application and web experiences with its family of wholly owned subsidiaries which includes Robinhodl Financial, Robinhodl Securities, and Robinhodl Crypto.</p>
          <p>No investments involve risks, including the possible loss of capital.</p>
          <p>Securities trading is offered to self-directed customers by Robinhodl Financial. Robinhodl Financial is not a member of the Financial Industry Regulatory Authority (FINRA).</p>
          <div id="splash7-disclosure" className="disclosures">
            <button onClick={() => setIsOpen(true)}>ⓘ View important disclosures</button>
          </div>
          <DisclosureModal open={isOpen} onClose={() => setIsOpen(false)}></DisclosureModal>
        </div>
      </div>
    </div>
  )
}
