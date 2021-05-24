import React from 'react';
import Popular from './Popular';
import styles from './App.module.scss';

class App extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <Popular />
      </div>
    );
  }
}

export default App;
