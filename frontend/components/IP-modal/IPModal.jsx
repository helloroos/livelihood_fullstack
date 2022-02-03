import React from 'react';

export default function IPModal({ setWarning }) {

  const closeModal = (e) => {
    if (e.target.id === 'ip-modal-bg') setWarning(false);
  };

  return (
    <div id="ip-modal-bg" onClick={closeModal}>
      <div id="ip-modal">
        <div id="notice">
          <h1>Please note</h1>
          <h2>This is a personal project to show off my skills in web development. </h2>
          <h2>This is NOT a real exchange. You can NOT trade in cryptocurrency on this website. You can NOT transfer any REAL money to your account on this website.</h2>
          <h2>If you want to connect with me or check out my work, you can do so on <a href="https://www.linkedin.com/in/roosmichelle/" target="_blank">LinkedIn</a> and <a href="https://github.com/michelleroos" target="_blank">GitHub</a>. Download my resume <a href="https://firebasestorage.googleapis.com/v0/b/scroople-25727.appspot.com/o/Michelle%20Roos%20-%20Resume.pdf?alt=media&token=694e1ef5-62c6-4973-a3fa-56848d3a85d9" target="_blank">here</a>.</h2>
          <div id="sign">
            <img src="https://firebasestorage.googleapis.com/v0/b/scroople-25727.appspot.com/o/profile-round.jpeg?alt=media&token=f570b69a-f2d6-45bc-a344-626436472db6" alt="michelle-img" />
            <h2>Thanks for stopping by!</h2>
          </div>
        </div>
      </div>
    </div>
  )
}
