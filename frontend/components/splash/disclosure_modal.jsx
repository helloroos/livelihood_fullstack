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
          <img src="https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/nrave3kiwyeambtdtkqv.jpg" alt="funny-missing-disclosure-img" />
        </div>
        
      </div>
    )
  }
}
