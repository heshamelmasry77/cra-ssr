import React, { Component } from 'react';
import { withWrapper } from 'create-react-server/wrapper';
import { Link, Route, Switch } from 'react-router-dom';

// Routes
import Homepage from './routes/homepage';
import About from './routes/about';
import NotFound from './routes/not-found';

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
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/about" component={About} />

          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default withWrapper(App);
