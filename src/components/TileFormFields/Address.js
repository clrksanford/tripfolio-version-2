import React, { Component } from 'react';

class Address extends Component {
  render() {
    return(
      <form>
        <input type='text' placeholder='Street address line 1'/>
        <input type='text' placeholder='Street address line 2'/>
        <input type='text' placeholder='City'/>
        <input type='text' placeholder='Country'/>
        <input type='text' placeholder='Zip'/>
        <a href='#'>
          {/* Adds additional fields with option to save phone number */}
          Add Phone
        </a>
      </form>
    );
  }
}

export default Address;
