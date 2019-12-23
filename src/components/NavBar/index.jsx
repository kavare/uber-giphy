import React from 'react';
import './NavBar.scss';

const NavBar = ({children}) => {
  return (
    <header class="ug-navbar">
      {children}
    </header>
  )
}

export default NavBar;
