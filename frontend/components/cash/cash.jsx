import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import DisclosureModal from '../splash/disclosure_modal';

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

export default function Cash() {

  useEffect(() => {
    document.title = `Cash | Robinhodl`;
  });

  const buyingPower = useSelector((state) => state.entities.buyingPower)

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id="cash-container">
      <div id="inner-cash-container">
        
        <div id="cash-mgmt-container">

          <div id="header">
            <h2>Cash</h2>
            <h2>{formatter.format(buyingPower)}</h2>
          </div>

          <div id="text-img-container">
            <div id="cash-management">
              <h3>Cash Management</h3>
              <p>Invest, spend, pay bills, and earn interest — all through one account.</p>
              <button id="disclosure" onClick={() => setIsOpen(true)}>ⓘ Variable APY Disclosure</button>
              <button id="sign-up" onClick={() => setIsOpen(true)}>Sign Up</button>
              <DisclosureModal open={isOpen} onClose={() => setIsOpen(false)}></DisclosureModal>
            </div>
            <img src="https://cdn.robinhood.com/assets/robinhood/brand/_next/static/images/balloon__ef7d8a9bb1c7845fcb7a6799c35d513e.svg" alt="cash-mgmt-img" />
          </div>

          <div id="transaction-history-container">
            <div id="header">
              <h2>Recent History</h2>
            </div>

            <div id="transaction-container">

              <div id="transaction-details">
                <p id="type">Deposit</p>
                <p id="date">09-09-2021</p>
              </div>
              <div id="transaction-amount">
                <p id="amount">$4,500</p>
              </div>
            </div>

          </div>
          
        </div>
        
        <div id="side-panel-container">
          
        </div>
      </div>
    </div>
  )
}


// import React from 'react';

// class Cash extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             transfer_type: "Deposit",
//             amount: 0,
//             user_id: 0
//         }
//         this.currentUser = this.props.currentUser;
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     componentDidMount() {
//         // if (typeof (this.props.buyingPower) == "undefined") {
//         if (Object.keys(this.props.transfers).length == 0) {
//             this.props.fetchUser(this.currentUser);
//         }
//     }

//     handleSubmit(event) {
//         event.preventDefault();
//         const transferDetails = Object.assign({}, this.state);
//         this.props.makeTransfer(transferDetails);
//         this.setState({
//             transfer_type: "Deposit",
//             amount: 0,
//             user_id: 0
//         });
//     }

//     handleChange(field) {
//         return (event) => {
//             let value = event.target.value;
//             this.setState(() => {
//                 return {
//                     [field]: value,
//                     user_id: 1
//                 }
//             })
//         }
//     }

//     render() {
//         const buyingPower = this.props.buyingPower;
//         console.log(this.props.transfers);
//         if (Object.keys(this.props.transfers).length == 0) {
//             <p>Loading...</p>
//         } else {
//             return (
//                 <div className="outmost-cash-container">
//                     <div className="outer-cash-container">
//                         <div className="main-details">
//                             <div className="details">
//                                 <header>
//                                     <h1>Cash</h1>
//                                     <h1>{formatter.format(buyingPower)}</h1>
//                                     {/* <img src={window.balloon} /> */}
//                                 </header>
//                                 <section className="history">
//                                     <div>
//                                         <h2>Recent history</h2>
//                                     </div>
//                                     <div>
//                                         <ul>
//                                             <li>Transfer</li>
//                                         </ul>
//                                     </div>
//                                 </section>
//                             </div>
//                             <div className="side-panel">
//                                 <form onSubmit={this.handleSubmit}>
//                                     <header>
//                                         <select onChange={this.handleChange('transfer_type')}>
//                                             <option>Deposit</option>
//                                             <option>Withdraw</option>
//                                         </select>
//                                     </header>
//                                     <div>
//                                         <p>From</p>
//                                         <select>
//                                             <option>Universal Bank</option>
//                                             <option>Robinhodl</option>
//                                         </select>
//                                     </div>
//                                     <div>
//                                         <p>To</p>
//                                         <select>
//                                             <option>Robinhodl</option>
//                                             <option>Universal Bank</option>
//                                         </select>
//                                     </div>
//                                     <div>
//                                         <p>Amount</p>
//                                         <input
//                                             value={this.state.value}
//                                             placeholder="$0"
//                                             onChange={this.handleChange('amount')}
//                                             required/>
//                                     </div>
//                                     <div>
//                                         <button type="submit">Transfer</button>
//                                         {/* <button>Transfer</button> */}
//                                     </div>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )
//         }
//     }
// }

// export default Cash;

// let formatter = new Intl.NumberFormat('en-US', {
//     style: 'currency',
//     currency: 'USD',
// })
