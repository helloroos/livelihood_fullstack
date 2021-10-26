import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import TokenChart from './token_chart';
import TokenSidePanel from './token_side_panel';
import TokenNews from './token_news';
import News from '../news/news';
// const app_key = require('../../../config/keys').newsApiKey;

export default function TokenShow(props) {

  const dispatch = useDispatch();
  const [about, setAbout] = useState("")
  const [buy, setBuy] = useState(true)
  const buyingPower = useSelector((state) => state.entities.buyingPower);
  const tokenName = useSelector((state) => state.entities.tokenInfo.token.token);
  const [marketPrice, setMarketPrice] = useState(0)
  // const [news, setNews] = useState([])
  const [number, setNumber] = useState("")
  const [oneDayChange, setOneDayChange] = useState(0)
  const [ThirtyDayChange, setThirtyDayChange] = useState(0)
  const orders = useSelector((state) => state.entities.orders);
  const currentUser = useSelector((state) => state.session.currentUserId)
  const tokenId = props.match.params.tokenId;

  // SIDE PANEL
  const [order, setOrder] = useState({
    order_type: 'Buy',
    token_sym: tokenId,
    market_price: 0,
    number: 0,
    amount: 0,
    // user_id: currentUser.id || currentUser
    user_id: parseInt(currentUser.id) || parseInt(currentUser)
  })

  let total = marketPrice * order.number;
  
  useEffect(() => {
    document.title = `${tokenId.slice(0, 1).toUpperCase() + tokenId.slice(1).toLowerCase()} | Robinhodl`;
    dispatch(getUser(currentUser))
    dispatch(fetchToken(tokenId))
    .then((res) => {
      setMarketPrice(res.token.market_price)
      // setOneDayChange(res.token.change_one_d)
      setThirtyDayChange(res.token.change_thirty_d)
      setAbout(res.token.about)
      setOrder({ ...order, market_price: res.token.market_price })
    })
  }, [tokenId])

  if (!marketPrice === 0) {
    setOrder.market_price(marketPrice)
  }

  const handleOrder = (e) => {
    e.preventDefault();
    dispatch(makeOrder(order))
    if (order.order_type === 'Buy') {
      dispatch(makeTransfer({
        transfer_type: 'Purchase',
        amount: order.amount,
        user_id: currentUser.id || currentUser
      }));
    } else {
      dispatch(makeTransfer({
        transfer_type: 'Sale',
        amount: order.amount,
        user_id: currentUser.id || currentUser
      }));
    }
    setOrder({
      order_type: 'Buy',
      token_sym: tokenId,
      market_price: 0,
      number: 0,
      amount: 0,
      user_id: currentUser.id || currentUser
    })
    setNumber("")
  }

  const changeOption = (val) => {
    if (val === 'Sell') {
      setBuy(false)
      setOrder({ ...order, order_type: 'Sell' })
    } else {
      setBuy(true)
      setOrder({ ...order, order_type: 'Buy' })
    }
  }

  return (
    <div id="token-container">
      <div id="token-content">
        <div id="feed-container">
          <div id="feed">

            <div id="header-container">
              <h1>{tokenName}</h1>
              <h1>${marketPrice.toLocaleString('en')}</h1>
              <div id="change-container">
                <p id="period">30 day change </p>
                <p id="change">{ThirtyDayChange.toLocaleString('en')}%</p>
              </div>
            </div>

            <div id="chart-container">
              <TokenChart />
            </div>

            <div id="about-container">
              {/* <div id="header"> */}
              <h2>About</h2>
              {/* </div> */}
              <p>{about}</p>
            </div>
{/* 
            <div id="stats-container">
              <h2>Key Statistics</h2>
              <p>Stats go here</p>
            </div> */}

            <News tokenId={tokenId} tokenName={tokenName}/>

          </div>
          <TokenSidePanel marketPrice={marketPrice} buyingPower={buyingPower} dispatch={dispatch} tokenId={tokenId} currentUser={currentUser} number={number} setNumber={setNumber} order={order} setOrder={setOrder} handleOrder={handleOrder} changeOption={changeOption} total={total} buy={buy}/>
        </div>
      </div>
    </div>
  )
}