// Modules
import React, {Component} from 'react';
import { hashHistory, Link } from 'react-router';
import { connect } from 'react-redux';
import _ from 'lodash';

// Components
import Header from './Header';
import NewTripModal from './NewTripModal';
import TripListItem from './TripListItem';

// Actions
import { setCurrentTripId, setCurrentTripOwner, setCurrentTripDestination } from '../actions';

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
            <main id="main">
              <div id="newTripContainer">
                <NewTripModal firebase={this.props.firebase} user={this.props.user}/>
              </div>
              <div id="profileColumnHeader">
                <h2>My Trips</h2>
              </div>
              <div id="myTripList">
                <ul>
                  {_.map(this.props.userTrips, (trip) => {
                    let { _id, creatorId, creatorUsername, destination } = trip;
                    destination = _.startCase(destination);

                    return (
                      <TripListItem key={_id}
                        tripId={_id}
                        pageName='completed'
                        creatorId={creatorId}
                        creatorUsername={creatorUsername}
                        destination={destination}
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

var mapStateToProps = ({ userTrips }) => {
  return {
    userTrips
  }
}

var mapDispatchToProps = (dispatch) => {
  return {
    setTripId: (tripId) => dispatch(setCurrentTripId(tripId)),
    setTripOwner: (ownerId) => dispatch(setCurrentTripOwner(ownerId)),
    setTripDestination: (destination) => dispatch(setCurrentTripDestination(destination))
  }
}

Profile = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default Profile;
