import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class Notes extends Component {
  render() {
    return(
      <form onSubmit={this.props.handleSubmit(this.props.onSubmit)}>
        <Field name='notes' component='textarea' placeholder='Add any general notes' />
        <button type='submit'>Save</button>
      </form>
    );
  }
}

Notes = reduxForm({
  form: 'notes'
})(Notes);

export default Notes;
