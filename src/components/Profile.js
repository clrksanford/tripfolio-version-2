// Modules
import React, {Component} from 'react';
import { hashHistory } from 'react-router'
import axios from 'axios';
import _ from 'lodash';

// Components
import Header from './Header';
import NewTripModal from './NewTripModal';
import TripListItem from './TripListItem';

// Styles and images
import "../styles/profile.css";

class Profile extends Component {
  _handleSubmit(query) {
    // Grab user info
    let destination = query;
    let creatorId = this.props.user.uid;
    let creatorUsername = this.props.user.providerData[0].displayName;

    axios.post(`https://lit-garden-98394.herokuapp.com/trips`, {
      creatorId,
      creatorUsername,
      destination,
      pointsOfInterest: [],
      public: false
    })
      .then((response) => {
        // Get the new trip and set it to state, so user can begin editing on the next page
        let newTrip = response.data;

        // Route user to planner page, where the newly created trip will be loaded from state
        let { _id, destForURL } = newTrip;

        hashHistory.push(`/trip-builder/${destForURL}/${_id}`);
      })
      .catch((err) => console.error(err))
  }

  render() {
    return(
      <div>
        <Header firebase={this.props.firebase}/>
        <main>
          <div id="newTripContainer">
            <NewTripModal firebase={this.props.firebase} user={this.props.params.userId}
            _handleSubmit={this._handleSubmit.bind(this)}/>
          </div>
          <div id="profileColumnHeader">
            <h2>My Trips</h2>
          </div>
          <div id="myTripList">
            <ul>
              {_.map(this.props.userTrips, (trip) => {
                let { _id, creatorId, creatorUsername, destForURL, destination } = trip;
                destination = _.startCase(destination);

                return (
                  <TripListItem key={_id}
                    tripId={_id}
                    creatorId={creatorId}
                    creatorUsername={creatorUsername}
                    destForURL={destForURL}
                    destination={destination}
                    displayName='My'
                    pageName='completed'
                    user={this.props.user}
                    URLname='myTrip'
                  />
                );
              })}
            </ul>
          </div>
        </main>
      </div>
    );
  }
}

export default Profile;
