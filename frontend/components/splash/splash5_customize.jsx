import React from 'react'

export default function Splash5Customize({ showCustomize }) {
  if (!showCustomize) {
    return null;
  } else {
    return (
      <div id="splash5-inner-container">
        <div id="splash5-img">
          <img src={window.customize} alt="customize-img" />
        </div>

        <div id="splash5-text-container">

          <div id="splash5-text">
            <h1>Keep Tabs on Your Money</h1>
            <p>Set up customized news and notifications to stay on top of your assets as casually or as relentlessly as you like. Controlling the flow of info is up to you.</p>
          </div>
        </div>
      </div>
    )
  }
}
