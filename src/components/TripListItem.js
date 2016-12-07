import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import { connect } from 'react-redux';
import _ from 'lodash';

import getSelectedTrip from '../actions/getSelectedTrip';

class TripListItem extends Component {
  // componentDidUpdate() {
  //   if( // If async dispatch has returned a trip
  //     !_.isEmpty(this.props.selectedTrip) &&
  //
  //     // And if that trip is the same as the one this component is linking to
  //     this.props.selectedTrip._id === this.props.tripId
  //   ) {
  //     let { _id, creatorUsername, destForURL, destination } = this.props.selectedTrip;
  //
  //     // Route user to completed trip page
  //     hashHistory.push(`completed/${creatorUsername}/${destForURL}/${_id}`);
  //   }
  // }
  render() {
    let { creatorId, creatorUsername, destForURL, destination, tripId, user } = this.props;
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
          hashHistory.push(`completed/${creatorUsername}/${destForURL}/${tripId}`);
        }}>
          {displayName} trip to {destination}
        </a>
      </li>
    )
  }
}

var mapStateToProps = ({ custom }) => {
  return {
    selectedTrip: custom.selectedTrip,
    user: custom.user
  }
}

var mapDispatchToProps = (dispatch) => {
  return {
    setSelectedTrip: (tripId) => dispatch(getSelectedTrip(tripId))
  }
}

TripListItem = connect(mapStateToProps, mapDispatchToProps)(TripListItem);

export default TripListItem;
