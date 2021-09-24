import React, { useState } from 'react'

export default function Splash5() {

  const [show1, setShow1] = useState(true);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  return (
    <div id="splash5-container">
      <div id="splash5-buttons">
        <button id="1">Learn</button>
        <button id="2">Manage</button>
        <button id="3">Customize</button>
      </div>
      <div id="splash5-inner-container">
        <div id="splash5-img">
          <img src={window.learn} alt="learn" />
        </div>

        <div id="splash5-text-container">

          <div id="splash5-text">
            <h1>Learn As You Grow</h1>
            <p>Our goal is to make investing in financial markets more affordable, more intuitive, and more fun, no matter how much experience you have (or don’t have).</p>
          </div>
        </div>
      </div>

    </div>
  )
}
