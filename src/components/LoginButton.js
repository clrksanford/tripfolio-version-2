import React, { Component } from 'react';
import { hashHistory } from 'react-router';


export default class LoginButton extends Component{
  constructor(props){
    super(props);
    this._handleClick = this._handleClick.bind(this)
  }

_handleClick(){
  let provider = new
  this.props.firebase.auth.GoogleAuthProvider();
  this.props.firebase.auth().signInWithPopup(provider).then(result => {
    hashHistory.push('/profile');
  });
}

  render(){
    return(
      <div>
        <button onClick={this._handleClick} id="login-button" className="btn btn-default">
        {this.props.children}</button>
      </div>
    )
  }
}
