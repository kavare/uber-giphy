import React from 'react';
import './Layout.scss';

const Layout = ({children}) => {
  return (
    <section
      className="ug-layout"
      data-testid="ug-layout"
    >
      {children}
    </section>
  )
}

export default Layout;
