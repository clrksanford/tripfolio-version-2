// Modules
import React from 'react';
import _ from 'lodash';

// Components
import LoginButton from './LoginButton';

// Styles and images
import '../App.css';
import logo from "../../public/images/logo-2.png";


export default (props) => {
  return(
    <div>
      <div id="home-banner">
        <div id="home-logo">
          <h1>Your Next Trip Starts Here</h1>
          <img id="logo-pic" src={logo} alt="Website logo showing yellow folder with Tripfolio in blue font"/>
        </div>
        <div>
          <div className="container-inner">
            <LoginButton firebase={props.firebase}>Login</LoginButton>
          </div>
        </div>
      </div>
    </div>
  );
}
