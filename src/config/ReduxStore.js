// Modules
import createLogger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

// Reducers and actions
import reducer from '../reducers'

// Configure redux middleware
const logger = createLogger();
const initialState = {};
const store = createStore(reducer, initialState, applyMiddleware(ReduxThunk));

export default store;
