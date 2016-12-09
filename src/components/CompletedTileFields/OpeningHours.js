import React from 'react';
import _ from 'lodash';

import deleteEmptyKeys from '../../constants/deleteEmptyKeys';

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
            let interval1, interval2, interval3;

            if(!_.isNil(hoursObj.from1) && !_.isNil(hoursObj.to1)) {
              interval1 = `${hoursObj.from1}-${hoursObj.to1}`;
            }

            if(!_.isNil(hoursObj.from2) && !_.isNil(hoursObj.to2)) {
              interval2 = `${hoursObj.from2}-${hoursObj.to2}`;
            }

            if(!_.isNil(hoursObj.from3) && !_.isNil(hoursObj.to3)) {
              interval3 = `${hoursObj.from3}-${hoursObj.to3}`;
            }

            return(
              <li key={index}>
                <p>{hoursObj.value}: {interval1}</p>
                <p>{interval2}</p>
                <p>{interval3}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
