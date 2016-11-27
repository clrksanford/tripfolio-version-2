import React, {Component} from 'react';
import { Link } from 'react-router';

// Components
import LogoutButton from './LogoutButton'

// Styles and images
import logo from "../../public/images/logo-2.png";

const Header = (props) => (
  <header>
    <img src={logo} alt="Yellow folder with TripFolio written in blue" />
    <nav>
      <ul>
        <li>
          <Link to='/destinations'>
            Destinations
          </Link>
        </li>
        <li>
          <LogoutButton firebase={props.firebase} />
        </li>
        <li>
          <Link to='/profile'>
            <img src={props.profilePicture} alt='Your profile avatar' />
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
//
// class Header extends Component {
//
//   render() {
//     return(
//       <div>
//         <div id="nav-pills">
//         <ul className="nav nav-pills">
//           {/* <li role="presentation">
//           <button id="nav-buttons" className="btn btn-default"><newTrips /><Link to="newTrip">My Trips</Link></button>
//           </li> */}
//           <li role="presentation">
//             <Link to="/profile">My Profile</Link>
//           </li>
//           <li role="presentation">
//             <button id="nav-buttons" className="btn btn-default">
//             <Link to="/destinations">Destinations</Link></button>
//           </li>
//           <li role="presentation">
//             <LogoutButton firebase={this.props.firebase}/>
//           </li>
//         </ul>
//         </div>
//         <div id="logo-div">
//           <Link to="/profile"><img id="logo" src={logo} alt="Website logo showing yellow folder with Tripfolio in blue font"/></Link>
//         </div>
//       </div>
//
//     )
//   }
// }
//
// export default Header;
