// Modules
import React, { Component } from 'react';
import _ from 'lodash';
import { Link } from 'react-router';
import { connect } from 'react-redux';

// Components
import Header from './Header';
import TripListItem from './TripListItem';

// Redux Actions
import getTripsByDestination from '../actions/getTripsByDestination';

//Styles and images
import logo from "../../public/images/logo-2.png";

class Destinations extends Component {
  render() {
    return(
      <main id="main">
        <div id="completed-nav">
          <Header firebase={this.props.firebase} />
        </div>
        <h2>Search Users' Trips</h2>
        <form onSubmit={(e) => {
          e.preventDefault();
          let query = this.refs.search.value;

          this.props.setTripsByDestination(query);
          this.refs.search.value = '';
        }}>
          <input id="newTripSubmit" type="text" ref="search" placeholder="Enter City Here"/>
          <input className="largeButton" type="submit" value="Go!" />
        </form>
        <div>
          <ul id="searchResults">
            {_.map(this.props.trips, (trip) => {
              let tripId = trip._id;
              let user = trip.creatorUsername;
              let destination = _.startCase(trip.destination);

              return (
                <TripListItem key={tripId}
                  tripId={tripId}
                  pageName='completed'
                  user={user}
                  destination={destination}
                />
              );
            })}
          </ul>
        </div>
      </main>
    );
  }
}

var mapDispatchToProps = (dispatch) => {
  return {
    setTripsByDestination: (cityName) => dispatch(getTripsByDestination(cityName))
  }
}

var mapStateToProps = ({ trips }) => {
  return {
    trips
  }
}

Destinations = connect(mapStateToProps, mapDispatchToProps)(Destinations);

export default Destinations;
