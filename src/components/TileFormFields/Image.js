import React, { Component } from 'react';
import axios from 'axios';

class Image extends Component {
  constructor(props) {
    super(props);

    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit() {
    let { tileId } = this.props;
    let imageURL = this.refs.imageURL.value;

    axios.put(`https://lit-garden-98394.herokuapp.com/travel-tiles/${tileId}`, {
      image: imageURL
    })
      .then((response) => {
        console.log(response);

        // Close modal
      })
      .catch(err => console.log(err))
  }

  render() {
    return(
      <form onSubmit={(e) => {
        e.preventDefault();
        this._handleSubmit();
      }}>
        <input type='text' placeholder='Enter image URL' ref='imageURL' />
        <input type='submit' value='Upload' />
      </form>
    );
  }
}

export default Image;
