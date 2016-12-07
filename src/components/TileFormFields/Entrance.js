import React, { Component } from 'react';

class Entrance extends Component {
  render() {
    return(
      <form>
        <label>Regular</label><input type='text' placeholder='price' />
        <label>Student</label><input type='text' placeholder='price' />
        <a href='#'>
          {/* Gives user a form to input a new discount type name and a new discount price (i.e. Under 25: $5) */}
          Add new discount type
        </a>
        <a href='#'>
          {/* This will add a textarea which lets user take down freeform notes, such as cutoff age for student discount or particular free hours */}
          Add notes
        </a>
      </form>
    );
  }
}

export default Entrance;
