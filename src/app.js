import React from 'react';
import { Provider } from 'react-redux';
import { WrapperProvider } from 'create-react-server/wrapper';
import createStore from './store';

import App from './containers/app';

export default ({ state, props, req, res }) => (
  <Provider store={createStore(state)}>
    <WrapperProvider initialProps={props}>
      <App />
    </WrapperProvider>
  </Provider>
);
