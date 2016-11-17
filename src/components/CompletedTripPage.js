import React, {Component} from 'react';
import { Link } from 'react-router';
import _ from 'lodash';

import UsersTile from './UsersTile';

class CompletedTripPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ownerDispName: ''
    }

    this._checkUser = this._checkUser.bind(this);
    this._renderMyTrip = this._renderMyTrip.bind(this);
    this._renderOtherUsersTrip = this._renderOtherUsersTrip.bind(this);
    this._renderTiles = this._renderTiles.bind(this);
    this._deleteTrip = this._deleteTrip.bind(this);
  }

  _deleteTrip(tripId) {
    let uid = this.props.user.uid;

    this.props.firebase.database().ref(`/tripbook/${uid}/${tripId}`).remove();
  }

  _checkUser() {
    let currentUser = this.props.user.uid;

    console.log('current user', currentUser);

    // The 'owner' of the trip (aka the uid of the person who created it) will need to be passed when the component is rendered
    let creator = this.props.params.uid;

    console.log('creator', creator);

    if(currentUser === creator) { // Later will be if(currentUser === creator)
      return this._renderMyTrip();
    } // Once functionality is added to see other people's trips, think of how to render
     else {
      return this._renderOtherUsersTrip();
    }
  }

  _renderMyTrip() {
    console.log('rendering my trip');
    let owner = this.props.params.uid;
    let tripId = this.props.params.tripId;
    let destination = this.props.params.destination;

    return (
      <div className="pageHeader">
        <h2>My trip to {this.props.params.destination}</h2>
        <nav>
          {/* STRETCH: switch to make your trip public or private */}
          <Link to={`/planner/${owner}/${tripId}/${destination}`}>Edit</Link>
          <Link to="/Profile" onClick={() => {
            this._deleteTrip(tripId)
          }}>Delete</Link>
        </nav>
      </div>
    )
  }

  _renderOtherUsersTrip() {
    console.log('rendering someone elses trip');
    let username = this.state.username;
    let tripId = this.props.params.tripId;
    let destination = this.props.params.destination;

    return (
      <div className="pageHeader">
        <h2>{username}s trip to {destination}</h2>
        <nav>
          {/* options to "add to your saved trips" and "like" will be added later */}
        </nav>
      </div>
    );
  }

  componentDidMount() {
    let firebase = this.props.firebase;
    let owner = this.props.params.uid;
    let tripId = this.props.params.tripId;
    let destination = this.props.params.destination;

    firebase.database().ref(`/tripbook/${owner}/${tripId}`).once('value').then(snapshot => {
      let tiles = snapshot.val().places;
      let username = snapshot.val().username;

      this.setState({ tiles, username });
    });
  }

  _renderTiles(query) {
    let tileList = _.filter(this.state.tiles, (tile, index) => {
      return tile.category === query;
    });

    return (_.map(tileList, (tile, index) => {
        let image = tile.tile["image_url"];
        let name = tile.tile.name;
        let url = tile.tile.url;

        return <UsersTile index={index} key={index} image={image} name={name} _deleteTile={this._deleteTile} _showModal={this._showSavedModal} spanClass='hidden' />
      })
    );
  }

  render() {
    return(
      <main>
        {this._checkUser()}
        <div id="restaurantTiles">
          <h4>Eat</h4>
          {this._renderTiles('restaurants')}
        </div>
        <div id="hotelTiles">
          <h4>Sleep</h4>
          {this._renderTiles('hotels')}
        </div>
        <div id="attractionTiles">
          <h4>See</h4>
          {this._renderTiles('tourist%20attractions')}
        </div>
        <div id="barTiles">
          <h4>Drink</h4>
          {this._renderTiles('bars')}
        </div>
      </main>
    );
  }
}

export default CompletedTripPage;
