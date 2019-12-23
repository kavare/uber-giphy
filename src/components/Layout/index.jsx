import React from 'react';
import './Layout.scss';

const Layout = ({children}) => {
  return (
    <section className="ug-layout-wrapper">
      {children}
    </section>
  )
}

export default Layout;
