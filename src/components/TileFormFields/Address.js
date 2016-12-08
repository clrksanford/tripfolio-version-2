import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class Address extends Component {
  render() {
    return(
      <form onSubmit={this.props.handleSubmit(this.props.onSubmit)}>
        <Field name='street1' component='input' type='text'
          placeholder='Street address line 1'/>
        <Field name='street2' component='input' type='text'
          placeholder='Street address line 2'/>
        <Field name='city' component='input' type='text'
          placeholder='City'/>
        <Field name='country' component='input' type='text'
          placeholder='Country'/>
        <Field name='zip' component='input' type='text'
          placeholder='Zip'/>
        <a href='#'>
          {/* Adds additional fields with option to save phone number */}
          Add Phone
        </a>
        <button type='submit' className='largeButton'>Save</button>
      </form>
    );
  }
}

Address = reduxForm({
  form: 'address'
})(Address);

export default Address;
