import React, { Component } from 'react';
import _ from 'lodash';

class TileEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formFields: [
        <input type='text' placeholder='Title' ref='title'/>,
        <textarea placeholder='Write some notes'></textarea>
      ]
    }

    this._addField = this._addField.bind(this);
  }

  _addField(fieldName) {
    let newField;

    switch(fieldName) {
      case 'openingHours':
        newField = (
          <input type='text' placeholder='Hours of operation'/>
        );
      default:
        newField = '';
    }

    let newState = this.state.formFields;
    newState.push(newField);

    this.setState({
      formFields: newState
    });
  }

  render() {
    return(
      <main>
        <h2>Create a Custom Tile</h2>
        <div className='pageContent'>
          <div className='row'>
            <div className='column'>
              <form>
                {_.map(this.state.formFields, (field, index) => {
                  return <div key={index}>{field}</div>;
                })}
              </form>
            </div>
            <div className='column'>
              <h3>Add more fields</h3>
              <a href='#'
                onClick={(e) => {
                  e.preventDefault();
                  let newField = (
                    <input type='text' placeholder='Hours of operation'/>
                  )

                  let newState = this.state.formFields;
                  newState.push(newField);

                  this.setState({
                    formFields: newState
                  });

                  console.log(this.state);
                  console.log('new', newState);
                }}>
                  Opening Hours
              </a>
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
