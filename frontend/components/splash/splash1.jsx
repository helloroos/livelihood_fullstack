import React from 'react'
import { Link } from 'react-router-dom';
import DisclosureModal from './disclosure_modal';

export default function Splash1({isOpen, setIsOpen }) {
  return (
    <div id="splash1-container">
      <div id="splash1-text">
        <h1>Investing for Everyone</h1>
        <p>Commission-free investing, plus the tools you need to put your
          money in motion. Sign up and get your first tokens for free.
          Certain limitations apply.</p>

        <Link to="/signup">
          <button id="sign-up">Sign Up</button>
        </Link>

        <div id="splash1-disclosure" className="disclosures">
          <button onClick={() => setIsOpen(true)}>ⓘ Commissions and Free Token Disclosure</button>
        </div>
        <DisclosureModal open={isOpen} onClose={() => setIsOpen(false)}></DisclosureModal>
      </div>

      <div id="splash1-image">
        <video src={window.offer_video} draggable="false" className="offer-video" autoPlay controlsList="nodownload nofullscreen noremoteplayback" loop muted playsInline preload="auto" />
        <img className="offer-image" src={window.offer_image} />
      </div>

    </div>
  )
}
