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
        console.log(json.articles);
        setNews(json.articles);
      } catch (error) {
        console.log("error", error);
      }
    }
    fetchData();
  }, []);


  // const dispatch = useDispatch();
  
  // const getNews = () => {
  //   console.log(dispatch(fetchNews()));
  // }

  const newsFeed = news.map(article => {
    return <h3>{article.title}</h3>
  })

  return (
    <div id="news-container">
      {/* {newsFeed} */}

      {news.map((article, i) => {
        return <div id="article-container" key={i}>
          <h3>{article.title}</h3>
        </div>
      })}
    </div>
  )
}
