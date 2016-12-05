import React, { Component } from 'react';

class Transit extends Component {
  render() {
    return(
      <form>
        <textarea placeholder='Notes on transit or parking'></textarea>
        <a href='#'>
          {/* Lets user add a new link to sites with more info; import TileLinks for this */}
          Add Link
        </a>
      </form>
    );
  }
}

export default Transit;
