import React, { Component } from 'react';
import { Link } from 'react-router';
import _ from 'lodash';

export default (props) => {
  let { creatorId, creatorUsername, destForURL, destination, displayName, pageName, tripId, user, URLname } = props;

  return(
    <li>
      <Link to={`${pageName}/${URLname}/${destForURL}/${tripId}`}>
        {displayName} trip to {destination}
      </Link>
    </li>
  );
}
