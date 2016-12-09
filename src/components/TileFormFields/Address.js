import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class Address extends Component {
  render() {
    return(
      <form className='tileForm'
        onSubmit={this.props.handleSubmit(this.props.onSubmit)}
      >
        <div className='formBody'>
          <h4>Address</h4>
          <div>
            <Field name='street1' component='input' type='text'
              placeholder='Street address line 1'/>
          </div>
          <div>
            <Field name='street2' component='input' type='text'
              placeholder='Street address line 2'/>
          </div>
          <div>
            <Field name='city' component='input' type='text'
              placeholder='City'/>
          </div>
          <div>
            <Field name='country' component='input' type='text'
              placeholder='Country'/>
          </div>
          <div>
          <Field name='zip' component='input' type='text'
            placeholder='Zip'/>
          {/* <a href='#'>
            Adds additional fields with option to save phone number
            Add Phone
          </a> */}
          </div>
        </div>
        <button type='submit' className='largeButton'>Save</button>
      </form>
    );
  }
}

Address = reduxForm({
  form: 'address'
})(Address);

export default Address;
