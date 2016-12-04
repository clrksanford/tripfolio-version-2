// Modules
import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import { connect } from 'react-redux';
import _ from 'lodash';
import axios from 'axios';

// Components

// Styles and images

class NewTripModal extends Component {
  constructor(props) {
    super(props);

    this._handleSubmit = this._handleSubmit.bind(this);
  }

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

        // Clean up destination for display in URL
        if(destination.indexOf(' ') !== -1) {
          destination = destination.replace(/ /g, '_');
        }

        // Route user to planner page, where the newly created trip will be loaded from state
        hashHistory.push(`/planner/${destination}`);
      })
      .catch((err) => console.error(err))
  }

  render() {
    return(
      <div>
        <form onSubmit={this._handleSubmit}>
          <h2>Where Do You Want To Go?</h2>
          <br/>
          <input type="text" ref="destination" id="newTripSubmit" placeholder="Enter City Here"/>
          <input className="largeButton" type="submit" value="Get Started!"/>
        </form>
      </div>
    );
  }
}

var mapStateToProps = ({ user }) => {
  return {
    user
  }
}

NewTripModal = connect(mapStateToProps, null)(NewTripModal);

export default NewTripModal;
