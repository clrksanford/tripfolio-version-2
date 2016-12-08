import React from 'react';
import _ from 'lodash';

export default (props) => {
  let { helpfulLinks } = props.tile;

  return(
    <div className='row completedTileContainer'>
      <div className='tileHeader'>
        <h4>Helpful Links</h4>
      </div>
      <div className='tileBody'>
        <ul>
          {_.map(helpfulLinks, (link, index) => {
            return (
              <li key={index}>
                <a href={link.url} target='_blank'>
                  {link.name}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
