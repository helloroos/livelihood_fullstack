import React from 'react';
import { useDispatch } from 'react-redux';

export default function News({ fetchNews }) {

  const dispatch = useDispatch();
  console.log(dispatch(fetchNews()));

  return (
    <div id="news-container">

    </div>
  )
}
