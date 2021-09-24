import React from 'react'
import DisclosureModal from './disclosure_modal';

export default function Splash6StocksImg({ showStocks }) {
  if (!showStocks) {
    return (
      <div id="splash6-img">
      </div>
    )
  } else {
    return (
      <div id="splash6-img">
        <img src="https://robinhood.com/us/en/_next/static/images/1x__b8f3a854780a088fe18bebe63df09581.png" alt="cash-mgmt" />
      </div>
    )
  }
}
