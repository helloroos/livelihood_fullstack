import React, { useState } from 'react';
// import DisclosureModal from './disclosure_modal';
import Splash6Cash from './splash6_cash';
import Splash6Gold from './splash6_gold';
import Splash6Crypto from './splash6_crypto';
import Splash6Options from './splash6_options';
import Splash6Stocks from './splash6_stocks';

export default function Splash6({ isOpen, setIsOpen }) {

  const [showCash, setShowCash] = useState(true);
  const [showStocks, setShowStocks] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [showGold, setShowGold] = useState(false);
  const [showCrypto, setShowCrypto] = useState(false);

  const openCash = () => {
    setShowCash(true);
    setShowStocks(false);
    setShowOptions(false);
    setShowGold(false);
    setShowCrypto(false);
  }

  const openStocks = () => {
    setShowCash(false);
    setShowStocks(true);
    setShowOptions(false);
    setShowGold(false);
    setShowCrypto(false);
  }

  const openOptions = () => {
    setShowCash(false);
    setShowStocks(false);
    setShowOptions(true);
    setShowGold(false);
    setShowCrypto(false);
  }

  const openGold = () => {
    setShowCash(false);
    setShowStocks(false);
    setShowOptions(false);
    setShowGold(true);
    setShowCrypto(false);
  }

  const openCrypto = () => {
    setShowCash(false);
    setShowStocks(false);
    setShowOptions(false);
    setShowGold(false);
    setShowCrypto(true);
  }

  return (
    <div id="splash6-container">
      <div id="splash6-inner-container">
        <div id="splash6-text">
          <h2>Our Products</h2>
          <div id="splash6-buttons">
            <button onClick={openCash}>Cash Management</button>
            <button onClick={openStocks}>Stocks & Funds</button>
            <button onClick={openOptions}>Options</button>
            <button onClick={openGold}>Gold</button>
            <button onClick={openCrypto}>Crypto</button>
          </div>

          <Splash6Cash isOpen={isOpen} setIsOpen={setIsOpen} showCash={showCash}/>

          <Splash6Gold isOpen={isOpen} setIsOpen={setIsOpen} showGold={showGold} />

          <Splash6Crypto isOpen={isOpen} setIsOpen={setIsOpen} showCrypto={showCrypto} />

          <Splash6Options isOpen={isOpen} setIsOpen={setIsOpen} showOptions={showOptions} />

          <Splash6Stocks isOpen={isOpen} setIsOpen={setIsOpen} showStocks={showStocks} />

        </div>

        <div id="splash6-img">
          <img src="https://robinhood.com/us/en/_next/static/images/1x__ea42f9545c170fe8354ebde19dcefbc0.png" alt="cash-mgmt" />
        </div>
      </div>
    </div>
  )
}
