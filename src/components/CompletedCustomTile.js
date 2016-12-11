import React from 'react';
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
  let addressComponent = null;
  let entranceComponent = null;
  let helpfulLinksComponent = null;
  let imageComponent = null;
  let openingHoursComponent = null;
  let tileNotesComponent = null;
  let transitComponent = null;
  let name;

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
    name = tile.name;
    
    for(var key in tile) {
      if(tile.hasOwnProperty(key)) {
        setComponent(key);
      }
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
        {imageComponent}
        {tileNotesComponent}
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 col-md-12'>
            {addressComponent}
            {openingHoursComponent}
          </div> {/* ---close col-md-6--- */}
          <div className='col-lg-6 col-md-12'>
            {entranceComponent}
            {transitComponent}
            {helpfulLinksComponent}
        </div>
      </div>
    </div>
    </div>
  </div>
  )
}
