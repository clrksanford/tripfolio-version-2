import React from 'react';

export default (props) => {
  let { city, country, street1, zip} = props.tile.address;

  return(
    <div className='row completedTileContainer'>
      <div className='tileHeader'>
        <h4>Address</h4>
      </div>
      <div className='tileBody'>
        <p>
          {street1},
          {city}, {country}
          {zip}
        </p>
      </div>
    </div>
  )
}
