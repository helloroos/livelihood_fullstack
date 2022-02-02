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
            <p>Our goal is to showcase the creators skills in Ruby on Rails, HTML, JavaScript, React, Redux, Postgress and CSS. </p>
          </div>
        </div>
      </div>
    )
  }
}
