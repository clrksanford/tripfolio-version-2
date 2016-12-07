// Modules
import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import { connect } from 'react-redux';
import _ from 'lodash';
import axios from 'axios';

// Actions
import getSelectedTrip from '../actions/getSelectedTrip';

// Styles and images

class NewTripModal extends Component {
  _handleSubmit(e) {
    e.preventDefault();

    // Grab user info
    let destination = this.refs.destination.value;
    let creatorId = this.props.user.uid;
    let creatorUsername = this.props.user.providerData[0].displayName;

    axios.post(`https://lit-garden-98394.herokuapp.com/trips`, {
      creatorId,
      creatorUsername,
      destination,
      pointsOfInterest: [],
      public: false
    })
      .then((response) => {
        // Get the new trip and set it to state, so user can begin editing on the next page
        let newTrip = response.data;

        this.props.setSelectedTrip(newTrip._id);

        // Route user to planner page, where the newly created trip will be loaded from state
        let { _id, destForURL } = newTrip;

        hashHistory.push(`/trip-builder/${destForURL}/${_id}`);
      })
      .catch((err) => console.error(err))
  }

  render() {
    return(
      <div>
        <form onSubmit={this._handleSubmit.bind(this)}>
          <h2>Where Do You Want To Go?</h2>
          <br/>
          <input type="text" ref="destination" id="newTripSubmit" placeholder="Enter City Here"/>
          <input className="largeButton" type="submit" value="Get Started!"/>
        </form>
      </div>
    );
  }
}

var mapStateToProps = ({ custom }) => {
  return {
    user: custom.user
  }
}

var mapDispatchToProps = (dispatch) => {
  return {
    setSelectedTrip: (tripId) => dispatch(getSelectedTrip(tripId))
  }
}

NewTripModal = connect(mapStateToProps, mapDispatchToProps)(NewTripModal);

export default NewTripModal;
