import React from 'react';
import { Field } from 'redux-form';

export default (props) => {
  const { name, index } = props;
  return(
    <div className='interval'>
      <span className={index === 1 ? 'hidden' : ''}
        onClick={() => props._removeInterval()}>
        X
      </span>
      <label>From</label>
      <Field name={`${name}from${index}`} component='input' type='text' />
      <label>To</label>
      <Field name={`${name}to${index}`} component='input' type='text' />
    </div>
  )
}
