/*---BEGIN IMPORTS---*/

// Modules
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';

// Components
import ConfigRoutes from './config/Routes';

// Reducers and actions
import reducer from './reducers'

/*---END IMPORTS---*/


// Configure redux middleware
const logger = createLogger();
const initialState = {};
const store = createStore(reducer, initialState, applyMiddleware(logger));


ReactDOM.render(
  <Provider store={store}>
    <ConfigRoutes />
  </Provider>,
  document.getElementById('root')
);
