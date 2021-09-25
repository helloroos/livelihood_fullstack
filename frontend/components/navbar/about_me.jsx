import React from 'react';

export default function AboutMe({ showAboutMe }) {
  if (!showAboutMe) {
    return null;
  } else {
    return (
      <div id="lower-navbar">
        <div id="lower-links-container">
          <a target="_blank" href="https://github.com/michelleroos" target="_blank">GitHub</a>
          <a target="_blank" href="https://www.linkedin.com/in/roosmichelle/"
            target="_blank">LinkedIn</a>
          <a target="_blank" href="">Portfolio</a>
          <a target="_blank" href="https://firebasestorage.googleapis.com/v0/b/scroople-25727.appspot.com/o/Michelle%20Roos%20-%20Resume.pdf?alt=media&token=04dc0414-21f1-4d24-af4e-5a49eceb3371" download>Resume</a>
        </div>
      </div>
    )
  }
}
