import React, { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
const app_key = require('../../../config/keys').newsApiKey;

export default function News() {

  const [news, setNews] = useState([])

  useEffect(() => {
    const url = `https://newsapi.org/v2/everything?q=crypto%20AND%20cryptocurrency%20AND%20crypto%20currency&apiKey=${app_key}`

    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        setNews(json.articles);
      } catch (error) {
        console.log("error", error);
      }
    }
    fetchData();
  }, []);

  const getDomain = (url) => {
    let domain = (new URL(url));
    domain = domain.hostname;
    return domain;
  }

  const shortenDate = (date) => {
    let newDate = date.slice(0, 10);
    return newDate;
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

  const newsFeed = news.map(article => {
    return <h3>{article.title}</h3>
  })

  return (
    <div id="news-container">
      <div id="header">
        <h2>News</h2>
      </div>


      {/* <div id="article-container">
        <a href="#" target="_blank">
          <div id="text-container">
            <div id="first-row">
              <p id="url">www.google.com</p>
              <p>09-09-2021</p>
            </div>
            <div id="second-row">
              <h3>Here is a pretty long and decent sized article title that fills out space</h3>
            </div>
          </div>
          <img src="https://media.istockphoto.com/photos/coins-of-various-cryptocurrencies-picture-id1034363382?k=20&m=1034363382&s=612x612&w=0&h=sCpRmOSicsJJS73_iNQh16nqeBgFKqU3jjfC4u42D_k=" alt="" />
        </a>
      </div>
      <div id="article-container">
        <a href="#" target="_blank">
          <div id="text-container">
            <div id="first-row">
              <p id="url">www.google.com</p>
              <p>09-09-2021</p>
            </div>
            <div id="second-row">
              <h3>Here is a pretty long and decent sized article title that fills out space</h3>
            </div>
          </div>
          <img src="https://media.istockphoto.com/photos/coins-of-various-cryptocurrencies-picture-id1034363382?k=20&m=1034363382&s=612x612&w=0&h=sCpRmOSicsJJS73_iNQh16nqeBgFKqU3jjfC4u42D_k=" alt="" />
        </a>
      </div>
      <div id="article-container">
        <a href="#" target="_blank">
          <div id="text-container">
            <div id="first-row">
              <p id="url">www.google.com</p>
              <p>09-09-2021</p>
            </div>
            <div id="second-row">
              <h3>Here is a pretty long and decent sized article title that fills out space</h3>
            </div>
          </div>
          <img src="https://media.istockphoto.com/photos/coins-of-various-cryptocurrencies-picture-id1034363382?k=20&m=1034363382&s=612x612&w=0&h=sCpRmOSicsJJS73_iNQh16nqeBgFKqU3jjfC4u42D_k=" alt="" />
        </a>
      </div> */}


      {news.map((article, i) => {
        return (
          <div id="article-container" key={i}>
            <a href={article.url} target="_blank">
              <div id="text-container">
                <div id="first-row">
                  <p id="url">{getDomain(article.url)}</p>
                  <p>{shortenDate(article.publishedAt)}</p>
                </div>
                <div id="second-row">
                  <h3>{article.title}</h3>
                </div>
              </div>
              {articleImage(article.urlToImage)}
            </a>
          </div>
        )
      })}


    </div>
  )
}
