import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isHelloWorld: true,
    }
  }

  render() {
    return (
      <>
        <h1 className="title">Hello {this.state.isHelloWorld ? 'World' : 'Dennis'}</h1>
        <button
          onClick={() => { this.setState(state => ({ isHelloWorld: !state.isHelloWorld })) }}
        >
          Change word
        </button>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
