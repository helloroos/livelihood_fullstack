import React, { useState } from 'react';
import Splash5Learn from './splash5_learn';
import Splash5Manage from './splash5-manage';
import Splash5Customize from './splash5-customize';

export default function Splash5() {

  const [showLearn, setShowLearn] = useState(true);
  const [showManage, setShowManage] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);

  const openLearn = () => {
    setShowLearn(true);
    setShowManage(false);
    setShowCustomize(false);
  }

  const openManage = () => {
    setShowLearn(false);
    setShowManage(true);
    setShowCustomize(false);
  }

  const openCustomize = () => {
    setShowLearn(false);
    setShowManage(true);
    setShowCustomize(true);
  }

  return (
    <div id="splash5-container">
      <div id="splash5-buttons">
        <button id="learn" onClick={openLearn}>Learn</button>
        <button id="manage" onClick={openManage}>Manage</button>
        <button id="customize" onClick={openCustomize}>Customize</button>
      </div>

      <Splash5Learn showLearn={showLearn}/>
      <Splash5Manage showManage={showManage}/>

    </div>
  )
}
