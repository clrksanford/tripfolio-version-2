// Modules
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { autoRehydrate, persistStore } from 'redux-persist';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

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
let store = composeWithDevTools(
  applyMiddleware(ReduxThunk),
  autoRehydrate()
)(createStore)(reducer);

persistStore(store);

export default store;
