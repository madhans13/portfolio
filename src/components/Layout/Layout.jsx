import React from 'react';
import Navigation from '../Navigation/Navigation.jsx';
import styles from './layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className="app">
      <Navigation />
      <main>
        {children}
      </main>
    </div>
  );
};

export default Layout; 