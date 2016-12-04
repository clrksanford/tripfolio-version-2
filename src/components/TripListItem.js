import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import { connect } from 'react-redux';

import getSelectedTrip from '../actions/getSelectedTrip';

class TripListItem extends Component {
  render() {
    let { creatorId, creatorUsername, destination, pageName, tripId, user } = this.props;
    let displayName;

    if (creatorId === user.uid) {
      displayName = 'My';
    } else {
      displayName = `${creatorUsername}'s`;
    }

    return(
      <li>
        <a href='#' onClick={(e) => {
          e.preventDefault();

          this.props.setSelectedTrip(tripId);
          hashHistory.push(`${pageName}/${creatorUsername}/${destination}`);
        }}>
          {displayName} trip to {destination}
        </a>
      </li>
    )
  }
}

var mapStateToProps = ({ user }) => {
  return {
    user
  }
}

var mapDispatchToProps = (dispatch) => {
  return {
    setSelectedTrip: (tripId) => dispatch(getSelectedTrip(tripId))
  }
}

TripListItem = connect(mapStateToProps, mapDispatchToProps)(TripListItem);

export default TripListItem;
