// Modules
import createLogger from 'redux-logger'
import { compose, createStore, applyMiddleware } from 'redux';
import { autoRehydrate, persistStore } from 'redux-persist';
import ReduxThunk from 'redux-thunk';

// Reducers and actions
import reducers from '../reducers'

// Configure redux middleware
const logger = createLogger();

let store = compose(
  applyMiddleware(logger, ReduxThunk),
  autoRehydrate()
)(createStore)(reducers);

persistStore(store);

export default store;
