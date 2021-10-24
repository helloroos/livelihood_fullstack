import React, { useEffect, useState } from 'react';
import AssetDetail from './asset_detail';
import PortfolioChart from './portfolio_chart';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import News from '../news/news';
import PortfolioSidePanel from './portfolio_side_panel';
const newsApiKey = require('../../../config/keys').newsApiKey;
const nytApiKey = require('../../../config/keys').nytApiKey;
import Loader from '../loader/loader';

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

export default function portfolio() {

  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.session.currentUserId);
  const buyingPower = useSelector((state) => state.entities.buyingPower);
  const [news, setNews] = useState([])
  const orders = useSelector((state) => state.entities.orders);
  const transfers = useSelector((state) => state.entities.transfers);

  useEffect(() => {
    document.title = ` Portfolio | Robinhodl `;
  });
  
  // Get user info
  useEffect(() => {
    dispatch(getUser(currentUser))
    dispatch(fetchTokens())
  }, [currentUser]);

  // Get news info
  useEffect(() => {
    // const url = `https://newsapi.org/v2/everything?q=crypto%20AND%20cryptocurrency%20AND%20crypto%20currency&apiKey=${app_key}`
    const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=crypto&api-key=${nytApiKey}`
    
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        console.log(json.response.docs);
        setNews(json.response.docs);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  if (!buyingPower) {
    return (
      <Loader></Loader>
    )
  } else {
    return (
      <div id="portfolio-container">
        <div id="portfolio-content">
          <div id="feed-container">
            <div id="feed">
  
              <div id="header-container">
                <h1>{formatter.format(buyingPower)}</h1>
                <div id="change-container">
                  <p id="change">+$215.48 (+1.65%)</p>
                  <p id="period">Today</p>
                </div>
              </div>
  
              <div id="chart-container">
                <PortfolioChart
                  dispatch={dispatch}
                  currentUser={currentUser}
                  transfers={transfers} />
              </div>
  
              <Link to="/cash">
                <div id="buying-power-container">
                <p>Buying Power</p>
                <p>{formatter.format(buyingPower)}</p>
                </div>
              </Link>
  
              <News news={news}/>
  
            </div>
  
            <PortfolioSidePanel/>
  
          </div>
        </div>
      </div>
    )
  }
};
