import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function PortfolioSidePanel() {

  const tokensHeld = useSelector((state) => state.entities.tokensHeld);

  return (
    <div id="side-panel">
      <header>
        <h3>Cryptocurrencies</h3>
      </header>

      {tokensHeld.filter(token => token.number > 0).map((token, i) => {
        return (
          <div id="portfolio-token-container" key={i}>
            <Link to={`tokens/${token.token_sym}`}>
              <div id="token-side">
                <div id="token-name">
                  {token.token_sym.toUpperCase()}
                </div>
                <div id="number-tokens">
                  {token.number} tokens
                </div>
              </div>
              <div id="value-side">
                <div id="market-price">
                  $45
                </div>
                <div id="market-change">
                  5%
                </div>
              </div>
            </Link>
          </div>
        )
      })}

      {/* <ul className="asset-container">
                {assets.map((asset) =>
                  <AssetDetail
                    key={asset[0]}
                    asset={asset}
                    fetchToken={fetchToken}
                    token={token}
                    tokens={tokens} />)}
              </ul> */}
              
      {/* <header>
        <h3>Watchlist</h3>
      </header>
      <ul className="asset-container">
        <Link to={"/tokens/bitcoin"}>
          <li className="asset">
            <div className="asset-info">
              <p className="asset-name">SNX</p>
            </div>
            <div className="asset-pricing">
              <p>$.08</p>
              <p className={isPositive("-5.6") ? "green" : "red"}>
                -5.6%</p>
            </div>
          </li>
        </Link>
      </ul> */}
    </div>
  )
}

let isPositive = (string) => {
  if (parseFloat(string) > 0) {
    return true;
  }
  return false;
}