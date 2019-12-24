import React from 'react';
import './NavBar.scss';

const NavBar = ({children}) => {
  return (
    <header className="ug-navbar" data-testid="ug-navbar">
      {children}
    </header>
  )
}

export default NavBar;
