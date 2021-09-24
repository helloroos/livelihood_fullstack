import React from 'react'

export default function Splash6OptionsImg({ showOptions }) {
  if (!showOptions) {
    return (
      <div id="splash6-img">
      </div>
    )
  } else {
    return (
      <div id="splash6-img">
        <img src="https://robinhood.com/us/en/_next/static/images/1x__5a49de3493cf5f77132e35fab7a8c781.png" alt="cash-mgmt" />
      </div>
    )
  }
}
