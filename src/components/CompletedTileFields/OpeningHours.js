import React from 'react';

export default (props) => {
  return(
    <div className='row completedTileContainer'>
      <div className='tileHeader'>
        <h4>Hours</h4>
      </div>
      <div className='tileBody'>
        <ul>
          {_.map(openingHours, (hoursObj, index) => {
            return(
              <li key={index}>
                <p>{hoursObj.value}: {hoursObj.from1}-{hoursObj.to1}</p>
                <p>{hoursObj.from2}-{hoursObj.to2}</p>
                <p>{hoursObj.from3}-{hoursObj.to3}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
