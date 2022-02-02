import React from 'react';
import Footer from '../footer';
import Header from '../header'
function Layout({ children }) {
    return (
      <div>
        <Header />
        {children}
        {/* <Footer /> */}
      </div>
    );
  }
  
  export default Layout;