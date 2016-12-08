// Modules
import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

// Components
import Header from './Header';
import TripListItem from './TripListItem';

// Redux Actions
import getTripsByDestination from '../actions/getTripsByDestination';


class Destinations extends Component {
  render() {
    return(
      <div>
        <Header firebase={this.props.firebase}/>
        <main>
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
                let { _id, creatorId, creatorUsername, destForURL, destination } = trip;
                destination = _.startCase(destination);

                // Do not display current user's own trips
                if(this.props.user.uid !== creatorId) {
                  return (
                    <TripListItem key={_id}
                      tripId={_id}
                      pageName='explore'
                      creatorId={creatorId}
                      displayName={`${creatorUsername}'s`}
                      destForURL={destForURL}
                      destination={destination}
                      URLname={_.snakeCase(creatorUsername)}
                    />
                  );
                }
              })}
            </ul>
          </div>
        </main>
      </div>
    );
  }
}

var mapDispatchToProps = (dispatch) => {
  return {
    setTripsByDestination: (cityName) => dispatch(getTripsByDestination(cityName))
  }
}

var mapStateToProps = ({ custom }) => {
  return {
    trips: custom.trips
  }
}

Destinations = connect(mapStateToProps, mapDispatchToProps)(Destinations);

export default Destinations;
