// Modules
import React, {Component} from 'react';
import { Link } from 'react-router';
import _ from 'lodash';

// Components
import NewTripModal from './NewTripModal';
import Header from './Header';

// Styles and images
import "../styles/profile.css";

class Profile extends Component {
    constructor(props) {
      super(props);

      this._deleteTrip = this._deleteTrip.bind(this);
    }

    _deleteTrip(tripId) {
      let uid = this.props.user.uid;

      this.props.firebase.database().ref(`/tripbook/${uid}/${tripId}`).remove();
    }

    render() {
      {/* If there is a logged in user, get their profile picture */}
      let profilePicture = this.props.user.providerData ? this.props.user.providerData[0].photoURL : 'http://placehold.it/100x100'

      return(
        <div>
            <Header firebase={this.props.firebase} profilePicture={profilePicture} />
            {/*<main id="main">
              <div id="newTripContainer">
                <NewTripModal firebase={this.props.firebase} user={this.props.user}/>
              </div>
              <div id="profileColumnHeader">
                <h2>My Trips</h2>
              </div>
              <div id="myTripList">
                <ul>
                  {_.map(this.props.trips, (trip, tripId) => {
                    let destination = trip.destination;
                    return (
                      <li key={tripId} data-tripId={tripId}>
                        My Trip To {destination}
                        <Link to={`/completed/${this.props.user.uid}/${tripId}/${trip.destination}`}>
                          View
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
          </main>*/}
        </div>
        );
    }
}

export default Profile;
