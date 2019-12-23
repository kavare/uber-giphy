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

function App() {
  const [keywords, setKeywords] = useState('');
  const [items, setItems] = useState([]);

  useEffect(() => {
    const url = buildSearchUrl({q: keywords});
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setItems(data.data);
      })
      .catch(err => {
        console.log(err);
        return [];
      })
  }, [keywords]);

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
        <List items={items}/>
      </Layout>
    </div>
  );
}

export default App;
