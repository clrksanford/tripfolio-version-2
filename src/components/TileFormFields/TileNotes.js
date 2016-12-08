import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class Notes extends Component {
  render() {
    return(
      <form className='tileForm'
        onSubmit={this.props.handleSubmit(this.props.onSubmit)}
      >
        <div className='formBody'>
          <h4>Notes</h4>
          <Field name='notes' component='textarea' placeholder='Add any general notes' />
        </div>
        <button type='submit' className='largeButton'>Save</button>
      </form>
    );
  }
}

Notes = reduxForm({
  form: 'notes'
})(Notes);

export default Notes;
