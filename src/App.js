// Modules
import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';

import Home from './components/Home';
// Styles and images
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      user: {},
      userTrips: {}
    }

    this._loadUsersTrips = this._loadUsersTrips.bind(this);
    this._renderApp = this._renderApp.bind(this);
  }

  componentDidMount(){
    let firebase = this.props.route.firebase;

    firebase.auth().onAuthStateChanged(user => {
      // If user is signed in...
      if (user) {
        // Save user's info to state
        this.setState({user});

        // Load user's trips
        this._loadUsersTrips(user);

      // Otherwise, if no user is signed in.
      } else {
        // Remove user and their trips from the state
        this.setState({ user: {} });
      }
    });
  }

  _loadUsersTrips(user) {
    let userId = user.uid;

    axios.get(`https://lit-garden-98394.herokuapp.com/${userId}`)
      .then((response) => {
        let userTrips = response.data;

        this.setState({ userTrips });
      })
  }

  _renderApp() {
    let children = null;
    if(this.props.children){
      children = React.cloneElement(this.props.children, {
        firebase: this.props.route.firebase,
        user: this.state.user,
        userTrips: this.state.userTrips
      })
    }

    if(_.isEmpty(this.state.user)) {
      console.log("ain't no user here");
      return <Home firebase={this.props.route.firebase}/>
    } else {
      console.log('user found');
      return <div>{children}</div>
    }
  }

  render(){


    return (
      <div>
        {this._renderApp()}
      </div>
      );
  }
}

export default App;
