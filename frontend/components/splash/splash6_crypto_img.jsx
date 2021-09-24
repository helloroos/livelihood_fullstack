import React from 'react'
import DisclosureModal from './disclosure_modal';

export default function Splash6CryptoImg({ showCrypto }) {
  if (!showCrypto) {
    return null;
  } else {
    return (
      <div id="splash6-img">
        <img src="https://robinhood.com/us/en/_next/static/images/1x__5a49de3493cf5f77132e35fab7a8c781.png" alt="cash-mgmt" />
      </div>
    )
  }
}
