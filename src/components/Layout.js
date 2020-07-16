import React from 'react';
import PropTypes from 'prop-types';

// Components
import Header from './Header';
import Footer from './Footer';

// CSS
import '../styles/main.scss';

function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
