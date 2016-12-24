import React, { Component } from 'react';
import { hashHistory } from 'react-router';

import backgroundImage from "../../public/images/pretty2.jpg";

export default class LogoutButton extends Component{
  constructor(props){
    super(props);
    this._handleLogout = this._handleLogout.bind(this)
  }

  _handleLogout(){
    this.props.firebase.auth().signOut().then(response => {
      hashHistory.push('/');
    });
  }

  render(){
    return(
      <div>
        <button onClick={this._handleLogout} id="nav-buttons" className="btn btn-default">Logout</button>
      </div>
    )
  }
}
