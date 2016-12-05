import React, { Component } from 'react';
import axios from 'axios';

import Address from './TileFormFields/Address';
import Transit from './TileFormFields/Transit';

class TravelTileEditorSandbox extends Component {
  constructor(props) {
    super(props);

    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit() {
    let name, image, address, street1, street2, city, country, zip, transit;

    name = this.refs.name.value;
    image = this.refs.image.value;
    transit = {
      notes: this.refs.transit.value
    };

    // For address
    street1 = this.refs.street1.value;
    street2 = this.refs.street2.value;
    city = this.refs.city.value;
    country = this.refs.country.value;
    zip = this.refs.zip.value;

    address = {
      street1,
      street2,
      city,
      country,
      zip
    }

    let options = {
      name,
      image,
      address,
      transit
    }

    axios.post('https://lit-garden-98394.herokuapp.com/travel-tiles', options)
      .then(response => console.log(response))
      .catch((err) => {
        if(err.response) {
          console.log(err.response);
        }
      })
  }

  render() {
    return(
      <main>
        <form onSubmit={(e) => {
          e.preventDefault();

          this._handleSubmit();
        }}>
          <label>Name</label><input type='text' ref='name' />
          <label>Image</label><input type='text' ref='image' />

          {/* ---ADDRESS--- */}
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

          {/* ---TRANSIT--- */}
          <textarea placeholder='Notes on transit or parking'
            ref='transit'></textarea>
          <a href='#'>
            {/* Lets user add a new link to sites with more info; import TileLinks for this */}
            Add Link
          </a>
          <input type='submit' value='Save' />
        </form>
      </main>
    );
  }
}

export default TravelTileEditorSandbox;
