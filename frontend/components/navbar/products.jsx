import React from 'react';
import { HashLink } from 'react-router-hash-link';

export default function Products({showProducts}) {
  if (!showProducts) {
    return null;
  } else {
    return (
      <div id="lower-navbar">
        <div id="lower-links-container">
          <HashLink to="">Cash Management</HashLink>
          <HashLink to="">Stocks & Funds</HashLink>
          <HashLink to="">Options</HashLink>
          <HashLink to="">Gold</HashLink>
          <HashLink to="">Crypto</HashLink>
        </div>
      </div>
    )
  }
}
