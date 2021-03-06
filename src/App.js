// Modules
import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import _ from 'lodash';

// Actions
import { setUser } from './actions';
import getUserTrips from './actions/getUserTrips';

// Modules
import Header from './components/Header';
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
        // this.setState({user});
        this.props.setUser(user);

        // Load user's trips
        // this._loadUsersTrips(user);
        this.props.getUserTrips(user);

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
        user: this.props.user,
        userTrips: this.props.userTrips
      })
    }

    if(_.isEmpty(this.props.user)) {
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

var mapDispatchToProps = (dispatch) => {
  return {
    getUserTrips: (user) => dispatch(getUserTrips(user)),
    setUser: (user) => dispatch(setUser(user))
  }
}

var mapStateToProps = ({ custom }) => {
  return {
    user: custom.user,
    userTrips: custom.userTrips
  }
}

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
