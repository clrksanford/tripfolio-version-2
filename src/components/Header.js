import React from 'react';
import { Link } from 'react-router';

// Components
import LogoutButton from './LogoutButton'

// Styles and images
import logo from "../../public/images/logo-2.png";

export default (props) => {
  return(
    <header>
      <div>
        <img src={logo} alt="Yellow folder with TripFolio written in blue" />
      </div>
      <nav>
        <ul>
          <li>
            <Link to='/destinations'>
              Destinations
            </Link>
          </li>
          /
          <li>
            <Link to='/profile'>
              Profile
            </Link>
          </li>
          <li>
            <LogoutButton firebase={props.firebase} />
          </li>
        </ul>
      </nav>
    </header>
  );
}
