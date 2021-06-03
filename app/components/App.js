import React from 'react';
import Popular from './Popular';
import Battle from './Battle';
import styles from './App.module.scss';

class App extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <Battle />
        <Popular />
      </div>
    );
  }
}

export default App;
