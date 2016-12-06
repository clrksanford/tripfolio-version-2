import React from 'react';

export default (props) => {
  return(
    <div className='linkContainer'>
      <input type='text' onChange={props._handleChange} />
      <input type='text' onChange={props._handleChange} />
    </div>
  );
}
