import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import DisclosureModal from './disclosure_modal';
import Splash1 from './splash1';
import Splash2 from './splash2';
import Splash3 from './splash3';
import Splash4 from './splash4';
import Splash5 from './splash5';
import Splash6 from './splash6';
import Splash7 from './splash7';

export default function splash() {

  useEffect(() => {
    document.title = `Commisson-free Cryptocurrency Exchange | Robinhodl`;
  });

  const currentUser = useSelector((state) => state.session.currentUser)

  const [isOpen, setIsOpen] = useState(false);

  if (currentUser) {
    return (
      <div>
      </div>
    )
  } else {
    return (
      <div id="splash-container">

        <Splash1 isOpen={isOpen} setIsOpen={setIsOpen}/>
        
        <Splash2/>

        <Splash3 isOpen={isOpen} setIsOpen={setIsOpen}/>

        <Splash4 isOpen={isOpen} setIsOpen={setIsOpen}/>

        <Splash5/>

        <Splash6 isOpen={isOpen} setIsOpen={setIsOpen}/>

        <Splash7 isOpen={isOpen} setIsOpen={setIsOpen}/>
      </div>
    )
  }
}

// class Splash extends React.Component {
//   constructor(props) {
//       super(props)
//     this.handleLogOut = this.handleLogOut.bind(this);
//   }

//   handleLogOut() {
//     this.props.logOut;
//     this.props.resetErrors;
//   }

//   render() {
//     if (this.props.currentUser) {
//       return(
//         <div>            
//         </div>
//         )
//     } else {
//       return(
//         <div>
//           <div className="sign-up-offer">

//             <div className="offer">
//               <h1>Investing for Everyone</h1>
//               <p>Commission-free investing, plus the tools you need to put your
//               money in motion. Sign up and get your first tokens for free.
//               Certain limitations apply.</p>
              
//               <div className="sign-up-btn">
//                 <Link to="/signup">
//                   <button type="submit">Sign Up</button>
//                 </Link>
//               </div>

//               <div className="disclosure">
//                 <p>ⓘ Commissions and Free Token Disclosure</p>
//               </div>
//             </div>

//             <div className="offer-image">
//               <img className="offer-image" src={window.offer_image} />
//               {/* <video src={window.offer_video} draggable="false" className="offer-video" autoPlay controlsList="nodownload nofullscreen noremoteplayback" loop muted playsInline preload="auto" /> */}
//             </div>
              
//           </div>

//           <div className="disclaimer">
//             <p>See our fee schedule to learn more about cost.</p>
//           </div>

//           {/* <div className="superbowl-campaign">
//             <video src="https://cdn.robinhood.com/assets/superbowl/superbowl.mp4"></video>
//             <h1>We are all investors</h1>
//             <p>See the campaign ➔</p>
//           </div>

//           <div>
//             FOOTER
//           </div> */}
//         </div>
//       )
//     }
//   }
// }

// export default Splash;