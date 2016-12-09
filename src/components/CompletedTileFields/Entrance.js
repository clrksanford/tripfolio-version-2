import React from 'react';
import _ from 'lodash';

export default (props) => {
  let { entrance } = props.tile;

  return(
    <div className='row completedTileContainer'>
      <div className='tileHeader'>
        <h4>Admissions</h4>
      </div>
      <div className='tileBody'>
        <ul>
          {_.map(entrance, (entranceType, index) => {
            return (
              <li key={index}>
                <p>{entranceType.label}: <span>{entranceType.price}</span></p>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
