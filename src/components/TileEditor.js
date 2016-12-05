import React, { Component } from 'react';

class TileEditor extends Component {
  render() {
    return(
      <main>
        <h2>Create a Custom Tile</h2>
        <div className='pageContent'>
          <div className='row'>
            <div className='column'>
              <form>
                <input type='text' placeholder='Title' ref='title'/>
                <textarea placeholder='Write some notes'></textarea>
              </form>
            </div>
            <div className='column'>
              <h3>Add more fields</h3>
              <a href='#'>Opening Hours</a>
              <a href='#'>Address</a>
              <a href='#'>Entrance Fee</a>
              <a href='#'>Transit/Parking</a>
              <a href='#'>Contact Info</a>
              <a href='#'>Helpful Link(s)</a>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default TileEditor;
