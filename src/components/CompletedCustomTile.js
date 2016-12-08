import React, { Component } from 'react';
import _ from 'lodash';

import '../styles/completedCustomTile.css';

export default (props) => {
  if(props.tile) {
    var { image, name, notes } = props.tile;

    if(!_.isEmpty(props.tile.helpfulLinks)) {
      var { helpfulLinks } = props.tile;
    }

    if(!_.isEmpty(props.tile.address)) {
      var { street1, city, country, zip } = props.tile.address;
    }

    if(!_.isEmpty(props.tile.openingHours)) {
      var { openingHours } = props.tile;
    }

    if(!_.isEmpty(props.tile.entrance)) {
      var { entrance } = props.tile;
    }

    if(!_.isEmpty(props.tile.transit)) {
      var transitNotes = props.tile.transit.notes;
    }
  }

  return(
    <div className='completedCustomTile'>
      <div className='container tileHeader'>
        <div className='row'>
          <h3>{name}</h3>
        </div>
      </div>
      <div className='container tileBody'>
        {/* IMAGE */}
        {/* NOTES */}
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 col-md-12'>
            {/* ADDRESS */}
            {/* OPENING HOURS */}
          </div> {/* ---close col-md-6--- */}
          <div className='col-lg-6 col-md-12'>
            {/* ENTRANCE */}
            {/* TRANSIT */}
            {/* HELPFUL LINKS */}
        </div>
      </div>
    </div>
    </div>
  </div>
  )
}
