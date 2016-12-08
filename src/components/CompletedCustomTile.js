import React, { Component } from 'react';
import _ from 'lodash';

import Address from './CompletedTileFields/Address';
import Entrance from './CompletedTileFields/Entrance';
import HelpfulLinks from './CompletedTileFields/HelpfulLinks';
import Image from './CompletedTileFields/Image';
import OpeningHours from './CompletedTileFields/OpeningHours';
import TileNotes from './CompletedTileFields/TileNotes';
import Transit from './CompletedTileFields/Transit';

import '../styles/completedCustomTile.css';

export default (props) => {
  let addressComponent, entranceComponent, helpfulLinksComponent, imageComponent, openingHoursComponent, tileNotesComponent, transitComponent;

  let neitherNilNorEmpty = (value) => {
    let result = false;

    if((typeof value === 'object' && !_.isEmpty(value)) ||
      (typeof value !== 'object' && !_.isNil(value))) {
        result = true;
      }
    return result;
  }

  let setComponent = (componentName) => {
    switch(componentName) {
      case 'address':
        addressComponent = <Address tile={props.tile} />;
        break;
      case 'entrance':
        entranceComponent = <Entrance tile={props.tile} />;
        break;
      case 'helpfulLinks':
        helpfulLinksComponent = <HelpfulLinks tile={props.tile} />;
        break;
      case 'image':
        imageComponent = <Image tile={props.tile} />;
        break;
      case 'openingHours':
        openingHoursComponent = <OpeningHours tile={props.tile} />;
        break;
      case 'notes':
        tileNotesComponent = <TileNotes tile={props.tile} />;
        break;
      case 'transit':
        transitComponent = <Transit tile={props.tile} />;
        break;
      default:
        break;
    }
  }

  if(props.tile) {
    let {tile} = props;
    for(var key in tile) {
      if(neitherNilNorEmpty(tile[key])) {
          setComponent(key);
      }
    }
  }


    // If address field is filled in, render it
    // if(!_.isEmpty(props.tile.address)) {
    //   addressComponent = <Address tile={props.tile} />
    // }

    // If entrance field is filled in, render it
    // if(!_.isEmpty(props.tile.entrance)) {
    //   entranceComponent = <Entrance tile={props.tile} />
    // }
    //
    // var { image, name, notes } = props.tile;
    //
    // if(!_.isEmpty(props.tile.helpfulLinks)) {
    //   var { helpfulLinks } = props.tile;
    // }
    //
    // if(!_.isEmpty(props.tile.openingHours)) {
    //   var { openingHours } = props.tile;
    // }
    //
    // if(!_.isEmpty(props.tile.transit)) {
    //   var transitNotes = props.tile.transit.notes;
    // }

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
            {addressComponent}
            {/* OPENING HOURS */}
          </div> {/* ---close col-md-6--- */}
          <div className='col-lg-6 col-md-12'>
            {entranceComponent}
            {/* TRANSIT */}
            {/* HELPFUL LINKS */}
        </div>
      </div>
    </div>
    </div>
  </div>
  )
}
