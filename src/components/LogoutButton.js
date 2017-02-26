import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';

import { logUserOut } from '../actions';

import backgroundImage from '../../public/images/pretty2.jpg';

class LogoutButton extends Component{
  constructor(props){
    super(props);
    this._handleLogout = this._handleLogout.bind(this)
  }

  _handleLogout(){
    this.props.firebase.auth().signOut().then(response => {
      this.props.logUserOut();
      hashHistory.push('/');
    });
  }

  render(){
    return(
      <div>
        <button onClick={this._handleLogout} id='nav-buttons' className='btn btn-default'>Logout</button>
      </div>
    )
  }
}

var mapDispatchToProps = (dispatch) => {
  return {
    logUserOut: () => dispatch(logUserOut())
  }
}

LogoutButton = connect(null, mapDispatchToProps)(LogoutButton);

export default LogoutButton;
