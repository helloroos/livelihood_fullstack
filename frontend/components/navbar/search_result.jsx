import React, { useEffect, useState } from 'react';

export default function SearchResult({ tokenSearchResult }) {
  return (
    <div id="search-list">
      {tokenSearchResult}
    </div>
  )
}
