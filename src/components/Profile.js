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
    componentDidMount() {
      console.log('component mounted', this.props.user, this.props.userTrips);
    }
    componentDidUpdate() {
      console.log('component updated', this.props.user, this.props.userTrips);
    }

    render() {
      // {/* If there is a logged in user, get their profile picture */}
      // let profilePicture = this.props.user ? this.props.user.providerData[0].photoURL : 'http://placehold.it/100x100'

      return(
        <div>
            {/* <Header firebase={this.props.firebase}
              profilePicture={profilePicture}
            /> */}
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

// var mapStateToProps = ({ custom }) => {
//   return {
//     user: custom.user,
//     userTrips: custom.userTrips
//   }
// }

// Profile = connect(mapStateToProps, null)(Profile);

export default Profile;
