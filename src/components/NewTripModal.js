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
        console.log(response);
        
        hashHistory.push(`/planner/${creatorUsername}/${destination}`);
      })
      .catch((err) => console.error(err))


    //
    // // Pass the data up the chain to parent state
    // this.props._handleSubmit(destination);
  }

  render() {
    return(
      <div>
        <form onSubmit={(e) => {
          e.preventDefault();
          this.props._handleSubmit(this.refs.destination.value).bind(this);
        }}>
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
