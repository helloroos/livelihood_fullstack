import React from 'react'
import DisclosureModal from './disclosure_modal';

export default function Splash6GoldImg({ showGold }) {
  if (!showGold) {
    return (
      <div id="splash6-img">
      </div>
    )
  } else {
    return (
      <div id="splash6-img">
        <img src="https://robinhood.com/us/en/_next/static/images/1x__ea42f9545c170fe8354ebde19dcefbc0.png" alt="cash-mgmt" />
      </div>
    )
  }
}
