import React from 'react';
import { HashLink } from 'react-router-hash-link';

export default function Learn({ showLearn }) {
  if (!showLearn) {
    return null;
  } else {
    return (
      <div id="lower-navbar">
        <div id="lower-links-container">
          <HashLink to="/splash6-container">Investing Basics</HashLink>
          <HashLink to="/splash6-container">Library</HashLink>
          <HashLink to="/splash6-container">Snacks</HashLink>
        </div>
      </div>
    )
  }
}
