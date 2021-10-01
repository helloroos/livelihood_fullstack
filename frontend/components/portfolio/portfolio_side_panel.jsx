import React from 'react';
import { Link } from 'react-router-dom';

export default function PortfolioSidePanel() {

  return (
    <div id="side-panel">
      <header>
        <h3>Cryptocurrencies</h3>
      </header>
      {/* <ul className="asset-container">
                {assets.map((asset) =>
                  <AssetDetail
                    key={asset[0]}
                    asset={asset}
                    fetchToken={fetchToken}
                    token={token}
                    tokens={tokens} />)}
              </ul> */}
      <header>
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
      </ul>
    </div>
  )
}

let isPositive = (string) => {
  if (parseFloat(string) > 0) {
    return true;
  }
  return false;
}