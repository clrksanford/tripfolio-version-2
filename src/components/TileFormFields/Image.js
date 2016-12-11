import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class Image extends Component {
  render() {
    return(
      <form className='tileForm'
        onSubmit={this.props.handleSubmit(this.props.onSubmit)}
      >
        <div className='formBody'>
          <h4>Upload an Image</h4>
          <Field name='image' component='input' type='text'
            placeholder='Enter image URL' />
        </div>
        <button type='submit' className='largeButton'>Upload</button>
      </form>
    );
  }
}

Image = reduxForm({
  form: 'image'
})(Image);

export default Image;
