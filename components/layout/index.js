import React from 'react';
import Header from '../header'
function Layout({ children }) {
    return (
      <div>
        <Header />
        {children}
      </div>
    );
  }
  
  export default Layout;