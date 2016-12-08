import React, { Component } from 'react';

class CompletedCustomTile extends Component {
  render() {
    return(
      <div className='completedCustomTile'>
        <div className='pageHeader'>
          <h3>Tile.Name</h3>
        </div>
        <div className='row'>
          <img src='#' alt='tile.image' />
        </div>
        <div className='row'>
          <p>Tile.notes</p>
        </div>
        <div className='row'>
          <h4>Helpful Links</h4>
          <ul>
            <li>Link1</li>
            <li>Link2</li>
          </ul>
        </div>
        <div className='row'>
          <div className='column'>
            <div className='row completedTileContainer'>
              <h4>Address</h4>
              {/* <a href='#' onClick={(e) => {
                e.preventDefault();
                this._showFieldModal('address');
              }}> */}
                <p>
                  street1,
                  city, country
                  zip
                </p>
              {/* </a> */}
            </div>
            <div className='row completedTileContainer'>
              <h4>Hours</h4>
              {/* <a href='#' onClick={(e) => {
                e.preventDefault();
                this._showFieldModal('openingHours');
              }}> */}
                <p>
                  day1, day2, from1, to1, etc...
                </p>
              {/* </a> */}
            </div>
          </div>
          <div className='column'>
            <div className='row completedTileContainer'>
              <h4>Admissions</h4>
              {/* <a href='#' onClick={(e) => {
                e.preventDefault();
                this._showFieldModal('entrance');
              }}> */}
                <p>
                  entrance type 1
                </p>
                <p>
                  entrance type 2
                </p>
                <p>
                  entrance type 3
                </p>
              {/* </a> */}
            </div>
            <div className='row completedTileContainer'>
              <h4>Transit/Parking</h4>
              <p>
                transit notes
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CompletedCustomTile;
