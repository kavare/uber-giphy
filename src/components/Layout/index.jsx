import React from 'react';
import './Layout.scss';

const Layout = ({children}) => {
  return (
    <section class="ug-layout-wrapper">
      {children}
    </section>
  )
}

export default Layout;
