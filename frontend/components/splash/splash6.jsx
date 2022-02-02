import React, { useState } from 'react';
// import DisclosureModal from './disclosure_modal';
import Splash6Cash from './splash6_cash';
import Splash6Gold from './splash6_gold';
import Splash6Crypto from './splash6_crypto';
import Splash6Options from './splash6_options';
import Splash6Stocks from './splash6_stocks';

import Splash6CashImg from './splash6_cash_img';
import Splash6StocksImg from './splash6_stocks_img';
import Splash6OptionsImg from './splash6_options_img';
import Splash6GoldImg from './splash6_gold_img';
import Splash6CryptoImg from './splash6_crypto_img';

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
            <button onClick={openStocks}>Blockchains</button>
            <button onClick={openOptions}>Options</button>
            <button onClick={openGold}>Gold</button>
            <button onClick={openCrypto}>Crypto</button>
          </div>

          <Splash6Cash isOpen={isOpen} setIsOpen={setIsOpen} showCash={showCash}/>
          <Splash6Stocks isOpen={isOpen} setIsOpen={setIsOpen} showStocks={showStocks} />
          <Splash6Options isOpen={isOpen} setIsOpen={setIsOpen} showOptions={showOptions} />
          <Splash6Gold isOpen={isOpen} setIsOpen={setIsOpen} showGold={showGold} />
          <Splash6Crypto isOpen={isOpen} setIsOpen={setIsOpen} showCrypto={showCrypto} />
        </div>

        <Splash6CashImg isOpen={isOpen} setIsOpen={setIsOpen} showCash={showCash} />
        <Splash6StocksImg isOpen={isOpen} setIsOpen={setIsOpen} showStocks={showStocks} />
        <Splash6OptionsImg isOpen={isOpen} setIsOpen={setIsOpen} showOptions={showOptions} />
        <Splash6GoldImg isOpen={isOpen} setIsOpen={setIsOpen} showGold={showGold} />
        <Splash6CryptoImg isOpen={isOpen} setIsOpen={setIsOpen} showCrypto={showCrypto} />
      </div>
    </div>
  )
}
