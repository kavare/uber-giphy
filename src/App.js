import React, { useState, useEffect, useCallback } from 'react';
import './App.scss';
import logo from './logo.svg';
import {
  NavBar,
  Layout,
  List,
  SearchBar
} from './components';

import {
  getSearchResults,
} from './utils';

import {
  useDebounce,
  useInfiniteScroll,
} from './hooks';

function App() {
  const [keywords, setKeywords] = useState('');
  const [results, setQuery] = useInfiniteScroll(getSearchResults);
  const debouncedKeywords = useDebounce(keywords, 300);
  const search = useCallback(setQuery);

  useEffect(() => {
    if (debouncedKeywords === undefined) return;
    search(debouncedKeywords);
  }, [debouncedKeywords, search]);


  const updateKeywords = (e) => {
    let keywords = e.target.value;
    setKeywords(keywords);
  }

  return (
    <div className="ug-app">
      <NavBar>
        <img
          className="ug-navbar__icon"
          src={logo}
          alt="Uber Giphy"
        />
        <SearchBar
          keywords={keywords}
          updateKeywords={updateKeywords}
        />
      </NavBar>
      <Layout>
        { results.length ? <List items={results}/> : null }
      </Layout>
    </div>
  );
}

export default App;
