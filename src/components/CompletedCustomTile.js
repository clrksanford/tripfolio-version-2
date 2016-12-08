import React, { Component } from 'react';
import _ from 'lodash';

export default (props) => {
  if(props.tile.address) {
    var { street1, city, country, zip } = props.tile.address;
  }

  if(props.tile.transit) {
    var transitNotes = props.tile.transit.notes;
  }
  return(
    <div className='completedCustomTile'>
      <div className='container'>
        <div className='row'>
          <h3>{props.tile.name}</h3>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <img src={props.tile.image} alt='tile.image' />
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <p>{props.tile.notes}</p>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <h4>Helpful Links</h4>
          <ul>
            {_.map(props.tile.helpfulLinks, (link, index) => {
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
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='row completedTileContainer'>
              <h4>Address</h4>
              {/* <a href='#' onClick={(e) => {
                e.preventDefault();
                this._showFieldModal('address');
              }}> */}
                <p>
                  {street1},
                  {city}, {country}
                  {zip}
                </p>
              {/* </a> */}
            </div>
            <div className='row completedTileContainer'>
              <h4>Hours</h4>
              {/* <a href='#' onClick={(e) => {
                e.preventDefault();
                this._showFieldModal('openingHours');
              }}> */}
                <ul>
                  {_.map(props.tile.openingHours, (hoursObj, index) => {
                    return(
                      <li key={index}>
                        <p>{hoursObj.value}: {hoursObj.from1}-{hoursObj.to1}</p>
                        <p>{hoursObj.from2}-{hoursObj.to2}</p>
                        <p>{hoursObj.from3}-{hoursObj.to3}</p>
                      </li>
                    )
                  })}
                </ul>
              {/* </a> */}
            </div>
          </div>
          <div className='col-md-6'>
            <div className='row completedTileContainer'>
              <h4>Admissions</h4>
              {/* <a href='#' onClick={(e) => {
                e.preventDefault();
                this._showFieldModal('entrance');
              }}> */}
              <ul>
                {_.map(props.tile.entrance, (entranceType, index) => {
                  return (
                    <li key={index}>
                      <p>{entranceType.label}: <span>{entranceType.price}</span></p>
                    </li>
                  )
                })}
              </ul>
              {/* </a> */}
            </div>
            <div className='row completedTileContainer'>
              <h4>Transit/Parking</h4>
              <p>
                {transitNotes}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
