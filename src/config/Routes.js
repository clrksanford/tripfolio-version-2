import React from 'react';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import { Provider } from 'react-redux';
import firebase from '../utils/firebase';

// Components
import App from '../App';
import Home from '../components/Home';
import Profile from '../components/Profile';
import TripBuilder from '../components/TripBuilder';
import NewTripModal from '../components/NewTripModal';
import CompletedTripPage from '../components/CompletedTripPage';
import Destinations from '../components/Destinations';
import TileEditor from '../components/TileEditor';
import TileEditorSandbox from '../components/TileEditorSandbox';
import MyCompletedTrip from '../components/MyCompletedTrip';
import OtherCompletedTrip from '../components/OtherCompletedTrip';

// Redux
import store from './ReduxStore';

export default () => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={App} firebase={firebase}>
        <IndexRoute component={Home} firebase={firebase}/>
        <Route path='/profile' component={Profile}/>
        <Route path='/trip-builder/:destination/:tripId' component={TripBuilder}/>
        <Route path='/newTrip' component={NewTripModal}/>
        <Route path='/destinations' component={Destinations}/>
        <Route path='/completed/myTrip/:destination/:tripId' component={MyCompletedTrip}/>
        <Route path='/explore/:userName/:destination/:tripId' component={OtherCompletedTrip}/>
        <Route path='/tile-editor/:tileId' component={TileEditor}/>
        <Route path='/tile-editor-sandbox' component={TileEditorSandbox}/>
      </Route>
    </Router>
  </Provider>
)
