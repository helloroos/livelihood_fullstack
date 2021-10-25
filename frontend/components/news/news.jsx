import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
const newsApiKey = require('../../../config/keys').newsApiKey;
const nytApiKey = require('../../../config/keys').nytApiKey;

export default function News({ tokenId, tokenName }) {

  const location = useLocation();
  const [news, setNews] = useState([])

  // Get news info
  useEffect(() => {
    let query;
    if (location.pathname == "/portfolio" || !tokenName) {
      query = 'crypto'
    } else {
      query = tokenName;
    }
    // const url = `https://newsapi.org/v2/everything?q=crypto%20AND%20cryptocurrency%20AND%20crypto%20currency&apiKey=${app_key}`
    const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${nytApiKey}`

    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        setNews(json.response.docs);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const getDomain = (url) => {
    let domain = (new URL(url));
    domain = domain.hostname;
    return domain;
  }

  const articleImage = (img) => {
    if (img === null) {
      return (
        <img src="https://media.istockphoto.com/photos/coins-of-various-cryptocurrencies-picture-id1034363382?k=20&m=1034363382&s=612x612&w=0&h=sCpRmOSicsJJS73_iNQh16nqeBgFKqU3jjfC4u42D_k=" alt="article-img" />
      )
    } else {
      return (
        <img src={img} alt="article-img" />
      )
    }
  }

  return (
    <div id="news-container">
      <div id="header">
        <h2>News</h2>
      </div>

      {/* <div id="article-container">
        <a href="https://www.linkedin.com/in/roosmichelle/" target="_blank">
          <div id="text-container">
            <div id="first-row">
              <p id="url">www.news.com</p>
              <p>09-09-2021</p>
            </div>
            <div id="second-row">
              <h3>This is a placeholder article div since newsapi.org does not work in production mode</h3>
            </div>
          </div>
          <img src="https://media.istockphoto.com/photos/coins-of-various-cryptocurrencies-picture-id1034363382?k=20&m=1034363382&s=612x612&w=0&h=sCpRmOSicsJJS73_iNQh16nqeBgFKqU3jjfC4u42D_k=" alt="" />
        </a>
      </div>
      <div id="article-container">
        <a href="https://www.linkedin.com/in/roosmichelle/" target="_blank">
          <div id="text-container">
            <div id="first-row">
              <p id="url">www.google.com</p>
              <p>09-09-2021</p>
            </div>
            <div id="second-row">
              <h3>This is a placeholder article div since newsapi.org does not work in production mode</h3>
            </div>
          </div>
          <img src="https://media.istockphoto.com/photos/coins-of-various-cryptocurrencies-picture-id1034363382?k=20&m=1034363382&s=612x612&w=0&h=sCpRmOSicsJJS73_iNQh16nqeBgFKqU3jjfC4u42D_k=" alt="" />
        </a>
      </div>
      <div id="article-container">
        <a href="https://www.linkedin.com/in/roosmichelle/" target="_blank">
          <div id="text-container">
            <div id="first-row">
              <p id="url">www.google.com</p>
              <p>09-09-2021</p>
            </div>
            <div id="second-row">
              <h3>This is a placeholder article div since newsapi.org does not work in production mode</h3>
            </div>
          </div>
          <img src="https://media.istockphoto.com/photos/coins-of-various-cryptocurrencies-picture-id1034363382?k=20&m=1034363382&s=612x612&w=0&h=sCpRmOSicsJJS73_iNQh16nqeBgFKqU3jjfC4u42D_k=" alt="" />
        </a>
      </div> */}


      {news.map((article, i) => {
        return (
          <div id="article-container" key={i}>
            <a href={article.web_url} target="_blank">
              <div id="text-container">
                <div id="first-row">
                  <p id="url">{getDomain(article.web_url)}</p>
                  {/* <p>{shortenDate(article.pub_date)}</p> */}
                  <p>{article.pub_date.slice(0, 10)}</p>
                </div>
                <div id="second-row">
                  <h3>{article.headline.main}</h3>
                </div>
              </div>
              {articleImage('https://www.nytimes.com/' + article.multimedia[0].url)}
            </a>
          </div>
        )
      })}


    </div>
  )
}
