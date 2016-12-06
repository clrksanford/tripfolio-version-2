// Modules
import createLogger from 'redux-logger'
import { combineReducers, compose, createStore, applyMiddleware } from 'redux';
import { autoRehydrate, persistStore } from 'redux-persist';
import ReduxThunk from 'redux-thunk';

// Reducers and actions
import customReducer from '../reducers'
import { reducer as formReducer } from 'redux-form';

// Configure reducers
const reducers = {
  form: formReducer,
  custom: customReducer
}

const reducer = combineReducers(reducers);

// Configure redux middleware
const logger = createLogger();

let store = compose(
  applyMiddleware(logger, ReduxThunk),
  autoRehydrate()
)(createStore)(reducer);

persistStore(store);

export default store;
