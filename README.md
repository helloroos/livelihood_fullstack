# Robinhodl 

## Live link
[robinhodl.herokuapp.com](https://robinhodl.herokuapp.com/)

![robinhodl-view](https://github.com/michelleroos/robinhodl_fullstack/blob/main/app/assets/images/gif-login.gif?raw=true)

> Please note that the app is temporarily down due to Robinhood reporting it for inappropriate use of IP... The author is currently making it look less pixel perfect clone-y :)

## About the project

Robinhodl is a *nearly* pixel perfect clone of the Robinhood website. The fullstack web app was built over two weeks as part of the App Academy bootcamp curriculum. It's built with Ruby on Rails and Postgres in the backend, and JavaScript/React, Redux, HTML and SCSS in the front. Robinhodl uses real time crypto-currency data from CoinGecko instead of traditional financial assets. 

## Key features

### CRUD

The CRUD paradigm is used to frame user sign up/sign in, buying and selling assets as well as making cash transfers to and from the account. See below for a code example of transfers.

#### HTML markup

```
    <div id="side-panel-container">
      <h3>Transfer</h3>
      <form onSubmit={handleTransfer}>
        <div id="from" className="options">
          <p>From</p>
          <div id="select-container">
            <select name="from" id="from-select" onChange={(e) => changeOption(e.target.value)}>
              <option value="Deposit">Universal Bank</option>
              <option value="Withdraw">Robinhodl</option>
            </select>
          </div>
        </div>

        <div id="to" className="options">
          <p>To</p>
          <div id="to-container">
            <p>{to}</p>
          </div>
        </div>

        <div id="amount" className="options">
          <p>Amount</p>
          <input type="text" placeholder="$0.00" required onChange={(e) => setTransfer({ ...transfer, amount: e.target.value })} />
        </div>
        <button id={transfer.amount ? 'green': 'gray'}>Transfer</button>
      </form>
    </div>
```

#### The request

```
const [transfer, setTransfer] = useState({
    transfer_type: 'Deposit',
    amount: null,
    user_id: currentUser.id || currentUser
  });

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

  const handleTransfer = (e) => {
    e.preventDefault();
    dispatch(makeTransfer(transfer));
  }
```

### The action

```
const makeTransferAction = (transfer) => {
  return {
    type: GET_USER_INFO,
    user: transfer
  }
}

const receiveTransfers = (transfers) => {
  return {
    type: RECEIVE_TRANSFERS,
    transfers: transfers
  }
}

export const makeTransfer = (transferDetails) => (dispatch) => {
  return TransferAPIUtil.makeTransfer(transferDetails)
    .then(
      (res) => dispatch(makeTransferAction(res)))
}

export const fetchTransfers = (transferDetails) => (dispatch) => {
  return TransferAPIUtil.fetchTransfers(transferDetails)
    .then(
      (res) => dispatch(receiveTransfers(res)))
}
```

#### Reducer

```
const initialState = [];

const transfersReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case MAKE_TRANSFER:
      return Object.values(action.transfer.transfers);
    case GET_USER_INFO:
      return Object.values(action.user.transfers);
    case LOGOUT_CURRENT_USER:
      return initialState;
    default:
      return state;
  }
}

export default transfersReducer;
```

## Built with

- Ruby on Rails
- JavaScript
- React
- Redux
- HTML
- SCSS
- JQuery
- PostGres

## Roadmap
- [x] Portfolio value - update to reflect total daily value (cash value & asset value valued at daily price)
- [x] Order functionality - fix re-render bug
- [ ] Watchlist - allow users to watch and unwatch currencies

## Contact
Michelle Roos
- [LinkedIn](https://www.linkedin.com/michelleroos/)

## Acknowledgements
- CoinGecko
- Graph
