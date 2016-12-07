import React from 'react';

export default (props) => {
  return(
    <div className='interval'>
      <span onClick={() => props._removeInterval()}>X</span>
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
  )
}
