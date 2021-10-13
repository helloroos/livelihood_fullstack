import React from 'react';

export default function AboutMe({ showAboutMe, location }) {
  if (!showAboutMe) {
    return null;
  } else if (location.pathname == "/") {
    return (
      <div id="lower-navbar">
        <div id="lower-links-container">
          <a target="_blank" href="https://github.com/michelleroos" target="_blank">GitHub</a>
          <a target="_blank" href="https://www.linkedin.com/in/roosmichelle/"
            target="_blank">LinkedIn</a>
          <a target="_blank" href="">Portfolio</a>
          <a target="_blank" href="https://firebasestorage.googleapis.com/v0/b/scroople-25727.appspot.com/o/Michelle%20Roos%20-%20Resume.pdf?alt=media&token=694e1ef5-62c6-4973-a3fa-56848d3a85d9" download>Resume</a>
        </div>
      </div>
    )
  } else {
    return (
      <div id="navbar-dropdown">
        <div id="dropdown-links-container">
          <a target="_blank" href="https://github.com/michelleroos" target="_blank">GitHub</a>
          <a target="_blank" href="https://www.linkedin.com/in/roosmichelle/"
            target="_blank">LinkedIn</a>
          <a target="_blank" href="">Portfolio</a>
          <a target="_blank" href="https://firebasestorage.googleapis.com/v0/b/scroople-25727.appspot.com/o/Michelle%20Roos%20-%20Resume.pdf?alt=media&token=694e1ef5-62c6-4973-a3fa-56848d3a85d9" download>Resume</a>
        </div>
      </div>
    )
  }
}
