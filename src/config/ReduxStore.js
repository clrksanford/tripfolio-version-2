// Modules
import createLogger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux';

// Reducers and actions
import reducer from '../reducers'

// Configure redux middleware
const logger = createLogger();
const initialState = {};
const store = createStore(reducer, initialState, applyMiddleware(logger));

export default store;
