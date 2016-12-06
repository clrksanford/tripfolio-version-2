import React from 'react';

export default (props) => {
  return(
    <div className='linkContainer'>
      <input type='text' ref='linkName' />
      <input type='text' ref='linkURL' />
    </div>
  );
}
