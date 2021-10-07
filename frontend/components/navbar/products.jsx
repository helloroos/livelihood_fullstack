import React from 'react';
import { HashLink } from 'react-router-hash-link';

export default function Products({showProducts}) {
  if (!showProducts) {
    return null;
  } else {
    return (
      <div id="lower-navbar">
        <div id="lower-links-container">
          <HashLink to="/#splash6-container">Cash Management</HashLink>
          <HashLink to="/#splash6-container">Stocks & Funds</HashLink>
          <HashLink to="/#splash6-container">Options</HashLink>
          <HashLink to="/#splash6-container">Gold</HashLink>
          <HashLink to="/#splash6-container">Crypto</HashLink>
        </div>
      </div>
    )
  }
}
