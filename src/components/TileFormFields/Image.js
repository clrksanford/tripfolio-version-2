import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import axios from 'axios';

class Image extends Component {
  render() {
    return(
      <form onSubmit={this.props.handleSubmit(this.props.onSubmit)}>
        <Field name='image' component='input' type='text'
          placeholder='Enter image URL' />
        <button type='submit' className='largeButton'>Upload</button>
      </form>
    );
  }
}

Image = reduxForm({
  form: 'image'
})(Image);

export default Image;
