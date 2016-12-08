import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class Transit extends Component {
  render() {
    return(
      <form onSubmit={this.props.handleSubmit(this.props.onSubmit)}>
        <Field name='transitNotes' component='textarea' placeholder='Notes on transit or parking' />
        <a href='#'>
          {/* Lets user add a new link to sites with more info; import TileLinks for this */}
          Add Link
        </a>
        <button type='submit' className='largeButton'>Save</button>
      </form>
    );
  }
}

Transit = reduxForm({
  form: 'transit'
})(Transit);

export default Transit;
