import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import { connect } from 'react-redux';

import getSelectedTrip from '../actions/getSelectedTrip';

class TripListItem extends Component {
  render() {
    let { tripId, pageName, user, destination } = this.props;

    return(
      <li>
        <a href='#' onClick={(e) => {
          e.preventDefault();

          this.props.setSelectedTrip(tripId);
          hashHistory.push(`${pageName}/${user}/${destination}`);
        }}>
          {user}'s trip to {destination}
        </a>
      </li>
    )
  }
}

var mapDispatchToProps = (dispatch) => {
  return {
    setSelectedTrip: (tripId) => dispatch(getSelectedTrip(tripId))
  }
}

TripListItem = connect(null, mapDispatchToProps)(TripListItem);

export default TripListItem;
