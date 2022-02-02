import React from 'react'

export default function Splash5Manage({ showManage }) {
  if (!showManage) {
    return null;
  } else {
    return (
      <div id="splash5-inner-container">
        <div id="splash5-img">
          <img src={window.manage} alt="manage-img" />
        </div>

        <div id="splash5-text-container">

          <div id="splash5-text">
            <h1>Manage Your Portfolio</h1>
            <p>Keep your portfolio in your pocket. Everything you need to manage your fake assets is available in a single web app.</p>
          </div>
        </div>
      </div>
    )
  }
}
