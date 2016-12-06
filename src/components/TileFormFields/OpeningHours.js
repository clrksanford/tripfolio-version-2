import React, { Component } from 'react';

class OpeningHours extends Component {
  render() {
    return(
      <form>
        <input type='text' placeholder='Day(s)' />
        <div className='interval'>
          <label>From</label>
          <input type='text' />:<input type='text' />
          <select>
            <option value='AM'>AM</option>
            <option value='PM'>PM</option>
          </select>
          <label>To</label>
          <input type='text' />:<input type='text' />
          <select>
            <option value='AM'>AM</option>
            <option value='PM'>PM</option>
          </select>
        </div>
        <a href='#'>Add interval</a>
        <input type='checkbox'/> <label>Mark closed</label>
      </form>
    );
  }
}

export default OpeningHours;
