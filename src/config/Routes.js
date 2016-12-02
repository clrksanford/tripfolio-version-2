import React from 'react';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import { Provider } from 'react-redux';
import firebase from '../utils/firebase';

// Components
import App from '../App';
import Home from '../components/Home';
import Profile from '../components/Profile';
import TripPlanningPage from '../components/TripPlanningPage';
import NewTripModal from '../components/NewTripModal';
import CompletedTripPage from '../components/CompletedTripPage';
import Destinations from '../components/Destinations';

// Redux
import store from './ReduxStore';

export default () => (
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
  </Provider>
)
