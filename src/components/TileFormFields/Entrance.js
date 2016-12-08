import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class Entrance extends Component {
  constructor(props) {
    super(props);

    this.state = {
      entrance3Visible: false
    }
  }

  render() {
    return(
      <form onSubmit={this.props.handleSubmit(this.props.onSubmit)}>
        <div className='entranceType'>
          <Field name='entrance1label' component='input' type='text' placeholder='Regular' />
          <Field name='entrance1price' component='input' type='text' />
        </div>

        <div className='entranceType'>
          <Field name='entrance2label' component='input' type='text' placeholder='Student' />
          <Field name='entrance2price' component='input' type='text' />
        </div>

        <div className={this.state.entrance3Visible ? 'entranceType' : 'hidden'}>
          <span onClick={() => {
            this.setState({ entrance3Visible: false })
          }}>
            X
          </span>
          <Field name='entrance3label' component='input' type='text' placeholder='Other (free hours)' />
          <Field name='entrance3price' component='input' type='text' />
        </div>

        <a href='#' className={this.state.entrance3Visible ? 'hidden' : ''}
          onClick={(e) => {
            e.preventDefault();
            this.setState({ entrance3Visible: true });
          }
        }>
          {/* Gives user a form to input a new discount type name and a new discount price (i.e. Under 25: $5) */}
          Add new discount type
        </a>
        {/* <a href='#'>
          This will add a textarea which lets user take down freeform notes, such as cutoff age for student discount or particular free hours
          Add notes
        </a> */}

        <button type='submit' className='largeButton'>Save</button>
      </form>
    );
  }
}

Entrance = reduxForm({
  form: 'entrance'
})(Entrance);

export default Entrance;
