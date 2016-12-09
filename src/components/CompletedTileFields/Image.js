import React from 'react';

export default (props) => {
  return (
    <div className='row completedTileContainer' id='completedImageContainer'>
      <img src={props.tile.image} id='customTileImage' alt='Lovely destination' />
    </div>
  )
}
