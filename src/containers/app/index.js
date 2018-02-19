import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Routes
import Routes from './routes';

class App extends Component {
  render() {
    return (
      <div id="app">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/something">A broken page link</Link>
          </li>
        </ul>
        <Routes />
      </div>
    );
  }
}

export default App;
