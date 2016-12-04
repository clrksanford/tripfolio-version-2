import React, { Component } from 'react';
import { Link } from 'react-router';

class TripListItem extends Component {
  render() {
    let { index, pageName, user, destination } = this.props;

    return(
      <li key={index}>
        <Link to={`${pageName}/${user}/${destination}`}>
          {user}'s trip to {destination}
        </Link>
      </li>
    )
  }
}

export default TripListItem;
