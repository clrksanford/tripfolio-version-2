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
  // constructor(props) {
  //   super(props);
  //
  //   this.state = {
  //     user: {}
  //   }
  // }
  // componentDidMount() {
  //   this.props.firebase.auth.onAuthStateChanged(user => {
  //     if(user) {
  //       this.setState({ user });
  //     }
  //   })
  // }
  componentDidMount() {
    console.log('new trip modal mounted', this.props.user);
  }

  render() {
    return(
      <div>
        <form onSubmit={(e) => {
          e.preventDefault();
          this.props._handleSubmit(this.refs.destination.value);
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
