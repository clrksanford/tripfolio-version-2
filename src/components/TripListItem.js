import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import { connect } from 'react-redux';
import _ from 'lodash';

import getSelectedTrip from '../actions/getSelectedTrip';

class TripListItem extends Component {
  componentDidUpdate() {
    if(!_.isEmpty(this.props.selectedTrip)) {
      let { creatorUsername, destination } = this.props.selectedTrip;
      hashHistory.push(`completed/${creatorUsername}/${destination}`);
    }
  }

  render() {
    let { creatorId, creatorUsername, destination, tripId, user } = this.props;
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
        }}>
          {displayName} trip to {destination}
        </a>
      </li>
    )
  }
}

var mapStateToProps = ({ selectedTrip, user }) => {
  return {
    selectedTrip,
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
