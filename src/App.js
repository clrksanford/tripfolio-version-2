// Modules
import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

// Actions
import { setUser } from './actions';
import getUserTrips from './actions/getUserTrips';

// Styles and images
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      user: {},
      trips: {}
    }

    this._handleClick = this._handleClick.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    this._loadUsersTrips = this._loadUsersTrips.bind(this);
  }

  componentDidMount(){
    let firebase = this.props.route.firebase;

    firebase.auth().onAuthStateChanged(user => {
      // If user is signed in...
      if (user) {
        this.setState(user);
        // Save user's info to state
        this.props.setUser(user);

        // Load logged in users trips to display on profile page
        this.props.setUserTrips(user);

      // Otherwise, if no user is signed in.
      } else {
        // Remove user and their trips from the state
        this.setState({ user: {}, destination: {} });
      }
    });
  }

  _loadUsersTrips(user) {
    let uid = user.uid;
    let firebase = this.props.route.firebase;

    firebase.database().ref(`/tripbook/${uid}`).on('value',snapshot => {
      let trips = snapshot.val();

      this.setState({ trips });
    });
  }

  _handleClick() {
    let firebase = this.props.route.firebase;
    let uid = this.state.user.uid;
    let destination = this.state.destination;

    firebase.database().ref(`/tripbook/${uid}`).push({
      destination: destination,
      places: []
    })
  }

  _handleSubmit(destination) {
    this.setState({ destination });
  }

  render(){
    let children = null;
    if(this.props.children){
      children = React.cloneElement(this.props.children, {
        _handleClick: this._handleClick,
        _handleSubmit: this._handleSubmit,
        destination: this.state.destination,
        firebase: this.props.route.firebase,
        trips: this.state.trips,
        user: this.state.user,
        _loadUsersTrips: this._loadUsersTrips
      })
    }

  return (
    <div>
      {children}
    </div>
    );
  }
}

var mapDispatchToProps = (dispatch) => {
  return {
    setUser: (user) => dispatch(setUser(user)),
    setUserTrips: (user) => dispatch(getUserTrips(user))
  }
}

App = connect(null, mapDispatchToProps)(App);

export default App;
