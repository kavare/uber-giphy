import React from 'react';
import './App.scss';
import logo from './logo.svg';
import {
  NavBar,
  Layout,
  List,
  SearchBar
} from './components';

function App() {
  return (
    <div className="ug-app">
      <NavBar>
        <img
          className="ug-navbar__icon"
          src={logo}
          alt="Uber Giphy"
        />
        <SearchBar />
      </NavBar>
      <Layout>
        <List />
      </Layout>
    </div>
  );
}

export default App;
