import React from 'react';
import { Link } from 'react-router';

export default (props) => {
  let { destForURL, destination, displayName, pageName, tripId, URLname } = props;

  return(
    <li>
      <Link to={`${pageName}/${URLname}/${destForURL}/${tripId}`}>
        {displayName} trip to {destination}
      </Link>
    </li>
  );
}
