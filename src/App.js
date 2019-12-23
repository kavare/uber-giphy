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
  const [isPristine, setIsPristine] = useState(true);
  const [results, isLoading, setQuery] = useInfiniteScroll(getSearchResults);
  const debouncedKeywords = useDebounce(keywords, 500);
  const search = useCallback(setQuery);

  useEffect(() => {
    if (debouncedKeywords === undefined) return;
    search(debouncedKeywords);
  }, [debouncedKeywords, search]);


  const updateKeywords = (e) => {
    let keywords = e.target.value;
    setKeywords(keywords);
    setIsPristine(false);
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
          className="ug-navbar__search"
          keywords={keywords}
          updateKeywords={updateKeywords}
        />
      </NavBar>
      <Layout>
        <List
          items={results}
          isPristine={isPristine}
          isLoading={isLoading}
        />
      </Layout>
    </div>
  );
}

export default App;
