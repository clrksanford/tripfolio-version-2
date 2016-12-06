import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import axios from 'axios';

class Address extends Component {
  // _handleSubmit() {
  //   let tileId = this.props.tileId;
  //
  //   // Get user input
  //   let street1 = this.refs.street1.value;
  //   let street2 = this.refs.street2.value;
  //   let city = this.refs.city.value;
  //   let country = this.refs.country.value;
  //   let zip = this.refs.zip.value;
  //
  //   // Compose options to send to DB
  //   let address = {
  //     street1,
  //     street2,
  //     city,
  //     country,
  //     zip
  //   }
  //
  //   axios.put(`https://lit-garden-98394.herokuapp.com/travel-tiles/${tileId}`, {
  //     address
  //   })
  //     .then((response) => {
  //       console.log(response);
  //
  //       // Close modal
  //     })
  //     .catch(err => console.log(err))
  // }

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
        <button type='submit'>Save</button>
      </form>
    );
  }
}

Address = reduxForm({
  form: 'address'
})(Address);

export default Address;
