// Modules
import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
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
      userTrips: {}
    }

    this._handleSubmit = this._handleSubmit.bind(this);
    this._loadUsersTrips = this._loadUsersTrips.bind(this);
  }

  componentDidMount(){
    let firebase = this.props.route.firebase;

    firebase.auth().onAuthStateChanged(user => {
      // If user is signed in...
      if (user) {
        this.setState(user);

        this._loadUsersTrips(user);
        // // Save user's info to state
        // this.props.setUser(user);
        //
        // // Load logged in users trips to display on profile page
        // this.props.setUserTrips(user);

      // Otherwise, if no user is signed in.
      } else {
        // Remove user and their trips from the state
        this.setState({ user: {}, destination: {} });
      }
    });
  }

  _loadUsersTrips(user) {
    let userId = user.uid;

    axios.get(`https://lit-garden-98394.herokuapp.com/${userId}`)
      .then((response) => {
        let userTrips = response.data;

        console.log(userTrips);

        this.setState({ userTrips });
      })
  }

  _handleSubmit(destination) {
    this.setState({ destination });
  }

  render(){
    let children = null;
    if(this.props.children){
      children = React.cloneElement(this.props.children, {
        _handleSubmit: this._handleSubmit,
        destination: this.state.destination,
        firebase: this.props.route.firebase,
        userTrips: this.state.userTrips,
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
//
// var mapDispatchToProps = (dispatch) => {
//   return {
//     setUser: (user) => dispatch(setUser(user)),
//     setUserTrips: (user) => dispatch(getUserTrips(user))
//   }
// }
//
// App = connect(null, mapDispatchToProps)(App);

export default App;
