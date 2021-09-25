import React, { useState } from 'react';
import DisclosureModal from '../splash/disclosure_modal';

export default function Learn({ showLearn }) {

  const [isOpen, setIsOpen] = useState(false);

  if (!showLearn) {
    return null;
  } else {
    return (
      <div id="lower-navbar">
        <div id="lower-links-container">
          <p onClick={() => setIsOpen(true)}>Investing Basics</p>
          <p onClick={() => setIsOpen(true)}>Library</p>
          <p onClick={() => setIsOpen(true)}>Snacks</p>
          <DisclosureModal open={isOpen} onClose={() => setIsOpen(false)} />
        </div>
      </div>
    )
  }
}
