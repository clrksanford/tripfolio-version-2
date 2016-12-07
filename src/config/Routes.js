import React from 'react';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import { Provider } from 'react-redux';
import firebase from '../utils/firebase';

// Components
import App from '../App';
import CompletedTripPage from '../components/CompletedTripPage';
import Destinations from '../components/Destinations';
import Home from '../components/Home';
import MyCompletedTrip from '../components/MyCompletedTrip';
import NewTripModal from '../components/NewTripModal';
import OtherCompletedTrip from '../components/OtherCompletedTrip';
import Profile from '../components/Profile';
import TileEditor from '../components/TileEditor';
import TileEditorSandbox from '../components/TileEditorSandbox';
import TripBuilder from '../components/TripBuilder';


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
