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
              <p onClick={() => setIsOpen(true)}>Learn</p>
              <p onClick={() => setIsOpen(true)}>Support</p>
              <p onClick={() => setIsOpen(true)}>Snacks</p>
              <DisclosureModal open={isOpen} onClose={() => setIsOpen(false)}></DisclosureModal>
            </div>
            <div id="col3" className="cols">
              <p onClick={() => setIsOpen(true)}>About us</p>
              <p onClick={() => setIsOpen(true)}>Careers</p>
              <p onClick={() => setIsOpen(true)}>Affiliates</p>
              <p onClick={() => setIsOpen(true)}>Blog</p>
              <p onClick={() => setIsOpen(true)}>Investor Relations</p>
              <DisclosureModal open={isOpen} onClose={() => setIsOpen(false)}></DisclosureModal>
              <div id="contact-icons">
                <a href="https://www.linkedin.com/in/roosmichelle/" target="_blank"><i className="fab fa-linkedin"></i></a>
                <a href="https://github.com/michelleroos" target="_blank"><i className="fab fa-github-square"></i></a>
                <a href="https://firebasestorage.googleapis.com/v0/b/scroople-25727.appspot.com/o/Michelle%20Roos%20-%20Resume.pdf?alt=media&token=04dc0414-21f1-4d24-af4e-5a49eceb3371" target="_blank"><i className="far fa-file"></i></a>
                <a href="#" target="_blank"><i className="far fa-user"></i></a>
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
