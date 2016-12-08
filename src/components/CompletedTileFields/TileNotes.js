import React from 'react';

export default (props) => {
  return(
    <div className='container'>
      <div className='row completedTileContainer' id='completedNotesContainer'>
        <p>{props.tile.notes}</p>
      </div>
    </div>
  )
}
