import React from 'react';

export default (props) => {
  return(
    <div className='row completedTileContainer'>
      <div className='tileHeader'>
        <h4>Transit/Parking</h4>
      </div>
      <div className='tileBody'>
        <p>
          {props.tile.transit.notes}
        </p>
      </div>
    </div>
  )
}
