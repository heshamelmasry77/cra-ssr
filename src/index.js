import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router-dom';
// import registerServiceWorker from './registerServiceWorker';
import createApp from './app';
import { history } from './store';

import './index.css';

render(
  <Router history={history}>
    {createApp({
      state: window.__INITIAL__STATE__,
      props: window.__INITIAL__PROPS__
    })}
  </Router>,
  document.getElementById('root')
);

// registerServiceWorker();
