import React, { useEffect, useState } from 'react';
const app_key = require('../../../config/keys').newsApiKey;

export default function Search() {

  useEffect(() => {
    const url = `https://api.coingecko.com/api/v3/coins/list?include_platform=false`

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

  return (
    <div id="search-list">
      
    </div>
  )
}
