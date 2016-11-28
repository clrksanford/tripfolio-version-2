// Modules
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import firebase from './utils/firebase';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';

// Components
import App from './App';
import Home from './components/Home';
import Profile from './components/Profile';
import TripPlanningPage from './components/TripPlanningPage';
import NewTripModal from './components/NewTripModal';
import CompletedTripPage from './components/CompletedTripPage';
import Destinations from './components/Destinations';

// Reducers and actions
import reducer from './reducers'

const logger = createLogger();
const initialState = {};
const store = createStore(reducer, initialState, applyMiddleware(logger));

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={App} firebase={firebase}>
        <IndexRoute component={Home} firebase={firebase}/>
        <Route path='/profile' component={Profile}/>
        <Route path='/planner/:uid/:tripId/:destination' component={TripPlanningPage}/>
        <Route path='/newTrip' component={NewTripModal}/>
        <Route path='/destinations' component={Destinations}/>
        <Route path='/completed/:uid/:tripId/:destination' component={CompletedTripPage}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
