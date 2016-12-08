import React from 'react';

export default (props) => {
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
