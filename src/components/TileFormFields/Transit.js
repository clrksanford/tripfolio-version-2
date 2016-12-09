import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class Transit extends Component {
  render() {
    return(
      <form className='tileForm'
        onSubmit={this.props.handleSubmit(this.props.onSubmit)}
      >
        <div className='formBody'>
          <h4>Transit Notes</h4>
          <Field name='transitNotes' component='textarea' placeholder='Notes on transit or parking' />
          {/* <a href='#'>
            Lets user add a new link to sites with more info; import TileLinks for this
            Add Link
          </a> */}
        </div>
        <button type='submit' className='largeButton'>Save</button>
      </form>
    );
  }
}

Transit = reduxForm({
  form: 'transit'
})(Transit);

export default Transit;
