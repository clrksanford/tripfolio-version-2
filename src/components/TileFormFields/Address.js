import React, { Component } from 'react';
import axios from 'axios';

class Address extends Component {
  _handleSubmit() {
    let tileId = this.props.tileId;

    // Get user input
    let street1 = this.refs.street1.value;
    let street2 = this.refs.street2.value;
    let city = this.refs.city.value;
    let country = this.refs.country.value;
    let zip = this.refs.zip.value;

    // Compose options to send to DB
    let address = {
      street1,
      street2,
      city,
      country,
      zip
    }

    axios.put(`https://lit-garden-98394.herokuapp.com/travel-tiles/${tileId}`, {
      address
    })
      .then((response) => {
        console.log(response);

        // Close modal
      })
      .catch(err => console.log(err))
  }

  render() {
    return(
      <form onSubmit={(e) => {
        e.preventDefault();
        this._handleSubmit();
      }}>
        <input type='text' ref='street1'
          placeholder='Street address line 1'/>
        <input type='text' ref='street2'
          placeholder='Street address line 2'/>
        <input type='text' ref='city'
          placeholder='City'/>
        <input type='text' ref='country'
          placeholder='Country'/>
        <input type='text' ref='zip'
          placeholder='Zip'/>
        <a href='#'>
          {/* Adds additional fields with option to save phone number */}
          Add Phone
        </a>
        <input type='submit' value='Save'/>
      </form>
    );
  }
}

export default Address;
