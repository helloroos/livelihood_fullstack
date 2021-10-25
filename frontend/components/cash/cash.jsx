import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DisclosureModal from '../splash/disclosure_modal';
import CashSidePanel from './cash_side_panel';

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

export default function Cash() {

  useEffect(() => {
    document.title = `Cash | Robinhodl`;
  });

  useEffect(() => {
    dispatch(getUser(currentUser))
  }, [transfers]);
  
  const dispatch = useDispatch();
  const buyingPower = useSelector((state) => state.entities.buyingPower);
  const currentUser = useSelector((state) => state.session.currentUserId);
  const transfers = useSelector((state) => state.entities.transfers);
  const [isOpen, setIsOpen] = useState(false);

  function compare(a, b) {
    if (a.created_at < b.created_at) {
      return 1;
    }
    if (a.created_at > b.created_at) {
      return -1;
    }
    return 0;
  }

  const [to, setTo] = useState('Robinhodl');

  const [transfer, setTransfer] = useState({
    transfer_type: 'Deposit',
    amount: null,
    user_id: currentUser.id || currentUser
  });

  const handleTransfer = (e) => {
    e.preventDefault();
    dispatch(makeTransfer(transfer));
  }

  const changeOption = (val) => {
    console.log(val);
    if (val === 'Deposit') {
      setTo('Robinhodl')
      setTransfer({ ...transfer, transfer_type: 'Deposit' })
    } else {
      setTo('Universal Bank')
      setTransfer({ ...transfer, transfer_type: 'Withdraw' })
    }
  }
  
  if (buyingPower) {
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

              {/* {[...transfers].sort(compare).map((transfer, i) => { */}
              {[...transfers].sort(compare).filter(transfer => transfer.transfer_type !== 'Purchase' || transfer.transfer_type !== 'Sale').map((transfer, i) => {
                if (transfer.created_at) {
                  return (
                    <div id="transaction-container" key={i}>
                      <div id="transaction-details">
                        <p id="type">{transfer.transfer_type}</p>
                        <p id="date">{transfer.created_at.slice(0, 10)}</p>
                      </div>
                      <div id="transaction-amount">
                        <p id="amount">${parseInt(transfer.amount.toLocaleString('en'))}</p>
                      </div>
                    </div>
                  )
                }
              })}

            </div>

          </div>

          <CashSidePanel dispatch={dispatch} currentUser={currentUser} to={to} setTo={setTo} transfer={transfer} setTransfer={setTransfer} handleTransfer={handleTransfer} changeOption={changeOption} transfers={transfers}/>
        </div>
      </div>
    )
  } else {
    return null;
  }
}
