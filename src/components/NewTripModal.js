import React, { Component } from 'react';
import _ from 'lodash';


class NewTripModal extends Component {
  render() {
    return(
      <div>
        <form onSubmit={(e) => {
          e.preventDefault();
          this.props._handleSubmit(this.refs.destination.value);
        }}>
          <h2>Where Do You Want To Go?</h2>
          <br/>
          <input type="text" ref="destination" id="newTripSubmit" placeholder="Enter City Here"/>
          <input className="largeButton" type="submit" value="Get Started!"/>
        </form>
      </div>
    );
  }
}

export default NewTripModal;
