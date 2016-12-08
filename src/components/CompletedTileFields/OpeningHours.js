import React from 'react';
import _ from 'lodash';

export default (props) => {
  let { openingHours } = props.tile;
  
  return(
    <div className='row completedTileContainer'>
      <div className='tileHeader'>
        <h4>Hours</h4>
      </div>
      <div className='tileBody'>
        <ul>
          {_.map(openingHours, (hoursObj, index) => {
            _.map(hoursObj, (value, key) => {
              if(!_.isNil(value)) {
                return(
                  <li key={index}>
                    <p>{hoursObj.value}: {hoursObj.from1}-{hoursObj.to1}</p>
                    <p>{hoursObj.from2}-{hoursObj.to2}</p>
                    <p>{hoursObj.from3}-{hoursObj.to3}</p>
                  </li>
                )
              }
            })
          })}
        </ul>
      </div>
    </div>
  )
}
