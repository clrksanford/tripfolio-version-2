// Modules
import React, {Component} from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

// Components
import Header from './Header';
import NewTripModal from './NewTripModal';
import TripListItem from './TripListItem';

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
      console.log(this.props.user);
      // {/* If there is a logged in user, get their profile picture */}
      let profilePicture = this.props.user ? this.props.user.providerData[0].photoURL : 'http://placehold.it/100x100'

      return(
        <div>
            <Header firebase={this.props.firebase}
              profilePicture={profilePicture}
            />
            <main>
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

var mapStateToProps = ({ user, userTrips }) => {
  return {
    user,
    userTrips
  }
}

Profile = connect(mapStateToProps, null)(Profile);

export default Profile;
