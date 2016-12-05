import React, { Component } from 'react';

class OpeningHours extends Component {
  render() {
    return(
      <form>
        <select>
          <option val='default'>Select a day</option>
          <option val='0'>Sunday</option>
          <option val='1'>Monday</option>
          <option val='2'>Tuesday</option>
          <option val='3'>Wednesday</option>
          <option val='4'>Thursday</option>
          <option val='5'>Friday</option>
          <option val='6'>Saturday</option>
        </select>
        <div className='interval'>
          <h4>From</h4>
          <input type='text' />
          <h4>To</h4>
          <input type='text' />
        </div>
        <a href='#'>Add interval</a>
        <input type='checkbox'/> <label>Mark closed</label>
      </form>
    );
  }
}

export default OpeningHours;
