import React, {useState, useEffect, useReducer} from 'react';
import './App.scss';
import logo from './logo.svg';
import mock from './data.json';
import {
  NavBar,
  Layout,
  List,
  SearchBar
} from './components';

import {
  buildSearchUrl,
} from './utils';

import {
  useDebounce,
} from './hooks';

function App() {
  const [keywords, setKeywords] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const debouncedKeywords = useDebounce(keywords, 300);

  useEffect((prev) => {
    if (debouncedKeywords === undefined) return;
    setIsLoading(true);

    const url = buildSearchUrl({q: debouncedKeywords});
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setSearchResults(data.data);
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
        return [];
      })
  }, [debouncedKeywords]);

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
        { isLoading ? <h2>Loading Giffy</h2> : null }
        { searchResults.length ? <List items={searchResults}/> : null }
      </Layout>
    </div>
  );
}

export default App;
