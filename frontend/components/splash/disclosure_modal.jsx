import React from 'react'

export default function DisclosureModal({open, onClose}) {
  if (!open) {
    return null;
  } else {
    return (
      <div id="disclosure-modal-container">
        <div id="modal-bg" onClick={onClose}>
        </div>
  
        <div id="disclosure-modal">
          {/* <i onClick={onClose} id="modal-x" class="fas fa-times"></i> */}
          <img src="https://i.imgflip.com/5o4xbd.jpg" />
        </div>
        
      </div>
    )
  }
}
