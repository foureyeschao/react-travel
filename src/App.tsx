import React from 'react';
import logo from './logo.svg';
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.App}>
      <header className={styles['App-header']}>
        <img src={logo} className={styles['App-logo']} alt="logo" />
        <p>
          React-Travel is initialized.
        </p>
      </header>
      <header />
    </div >
  );
}

export default App;
