import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import store from './store';
import Root from './components/Root';

render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('main')
);
