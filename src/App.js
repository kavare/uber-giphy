import React, { useState, useEffect, useCallback } from 'react';
import './App.scss';
import logo from './config/logo.svg';
import iconSingleColumn from './config/single-column.svg';
import iconThreeColumns from './config/three-columns.svg';

import {
  NavBar,
  Layout,
  List,
  SearchBar,
  IconButton,
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
  const [columns, setColumns] = useState(1);

  useEffect(() => {
    if (debouncedKeywords === undefined) return;
    search(debouncedKeywords);
  }, [debouncedKeywords, search]);


  const updateKeywords = (e) => {
    let keywords = e.target.value;
    setKeywords(keywords);
    setIsPristine(false);
  }

  const backToHome = (e) => {
    setKeywords('');
    setTimeout(() => setIsPristine(true), 1000)
  }

  return (
    <div className="ug-app">
      <NavBar>
        <img
          className="ug-navbar__icon"
          src={logo}
          alt="Uber Giphy"
          title="Click to resume to initial state"
          onClick={backToHome}
        />
        <SearchBar
          className="ug-navbar__search"
          keywords={keywords}
          updateKeywords={updateKeywords}
        />
        <IconButton
          className={columns === 1 ? 'ug-icon-button--is-active' : ''}
          img={iconSingleColumn}
          text="Single Column Layout"
          onClick={() => setColumns(1)}
        />
        <IconButton
          className={columns === 3 ? 'ug-icon-button--is-active' : ''}
          img={iconThreeColumns}
          text="Three Columns Layout"
          onClick={() => setColumns(3)}
        />
      </NavBar>
      <Layout>
        <List
          columns={columns}
          items={results}
          isPristine={isPristine}
          isLoading={isLoading}
        />
      </Layout>
    </div>
  );
}

export default App;
