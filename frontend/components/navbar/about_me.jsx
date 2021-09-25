import React from 'react';

export default function AboutMe({ showAboutMe }) {
  if (!showAboutMe) {
    return null;
  } else {
    return (
      <div id="lower-navbar">
        <div id="lower-links-container">
          <a href="">GitHub</a>
          <a href="">LinkedIn</a>
          <a href="">Portfolio</a>
          <a href="">Resume</a>
        </div>
      </div>
    )
  }
}
