import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import TokenChart from './token_chart';
import TokenSidePanel from './token_side_panel';
import TokenNews from './token_news';
const app_key = require('../../../config/keys').newsApiKey;

export default function TokenShow(props) {

  const dispatch = useDispatch();
  const [about, setAbout] = useState("")
  const buyingPower = useSelector((state) => state.entities.buyingPower);
  const [marketPrice, setMarketPrice] = useState(0)
  const [news, setNews] = useState([])
  const [number, setNumber] = useState("")
  const [oneDayChange, setOneDayChange] = useState(0)
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
    user_id: currentUser.id || currentUser
  })

  let total = marketPrice * order.number;
  
  useEffect(() => {
    document.title = `${tokenId.slice(0, 1).toUpperCase() + tokenId.slice(1).toLowerCase()} | Robinhodl`;
  });
  
  useEffect(() => {
    dispatch(fetchToken(tokenId))
    .then((res) => {
      setMarketPrice(res.token.market_price)
      setOneDayChange(res.token.change_one_d)
      setAbout(res.token.about)
      setOrder({ ...order, market_price: res.token.market_price })
    })
  }, [tokenId])

  // useEffect(() => {
  //   dispatch(fetchToken(tokenId))
  //     .then((res) => {
  //       setOrder({ ...order, market_price: res.token.market_price })
  //     })
  // }, [tokenId])

  useEffect(() => {
    dispatch(getUser(currentUser))
  }, [tokenId]);

  useEffect(() => {
    const url = `https://newsapi.org/v2/everything?q=${tokenId}&apiKey=${app_key}`
    
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        setNews(json.articles);
      } catch (error) {
        // console.log("error", error);
      }
    }
    fetchData();
  }, []);

  if (!marketPrice === 0) {
    setOrder.market_price(marketPrice)
  }

  const handleOrder = (e) => {
    e.preventDefault();
    dispatch(makeOrder(order))
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
      setOrder({ ...order, order_type: 'Sell' })
    } else {
      setOrder({ ...order, order_type: 'Buy' })
    }
  }

  return (
    <div id="token-container">
      <div id="token-content">
        <div id="feed-container">
          <div id="feed">

            <div id="header-container">
              <h1>{tokenId.slice(0, 1).toUpperCase() + tokenId.slice(1).toLowerCase()}</h1>
              <h1>${marketPrice.toLocaleString('en')}</h1>
              <div id="change-container">
                <p id="change">${oneDayChange.toLocaleString('en')}</p>
                <p id="period">Today</p>
              </div>
            </div>

            <div id="chart-container">
              Chart here
              {/* <TokenChart
                token={this.props.token}
                tokenId={this.props.match.params.tokenId} /> */}
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

            <TokenNews tokenId={tokenId}/>

          </div>
          {/* <TokenSidePanel marketPrice={marketPrice} buyingPower={buyingPower} dispatch={dispatch} tokenId={tokenId} currentUser={currentUser}/> */}
          <TokenSidePanel marketPrice={marketPrice} buyingPower={buyingPower} dispatch={dispatch} tokenId={tokenId} currentUser={currentUser} number={number} setNumber={setNumber} order={order} setOrder={setOrder} handleOrder={handleOrder} changeOption={changeOption} total={total}/>
        </div>
      </div>
    </div>
  )
}