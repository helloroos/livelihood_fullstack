import React from 'react'

export default function Splash5Learn({showLearn}) {
  if (!showLearn) {
    return null;
  } else {
    return (
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
    )
  }
}
