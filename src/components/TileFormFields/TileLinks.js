import React, { Component } from 'react';

class TileLinks extends Component {
  render() {
    return(
      <form>
        <input type='text' ref='linkName' />
        <input type='text' ref='linkURL' />
      </form>
    );
  }
}

export default TileLinks;
