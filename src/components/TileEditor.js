import React, { Component } from 'react';
import _ from 'lodash';

class TileEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formFields: {
        title: {
          innerJSX: <input type='text' placeholder='Title' ref='title'/>,
          currentlyActive: true
        },
        notes: {
          innerJSX: <textarea placeholder='Write some notes'></textarea>,
          currentlyActive: true
        },
        openingHours: {
          innerJSX: <input type='text' placeholder='Hours of operation'/>,
          currentlyActive: false
        }
      },
      newFormLinks: {
        openingHours: {
          text: 'Opening Hours',
          currentlyActive: true
        },
        address: {
          text: 'Address',
          currentlyActive: true
        },
        entrance: {
          text: 'Entrance Fee',
          currentlyActive: true
        },
        transit: {
          text: 'Transit/Parking',
          currentlyActive: true
        },
        contact: {
          text: 'Contact Info',
          currentlyActive: true
        },
        links: {
          text: 'Helpful Links',
          currentlyActive: true
        }
      }
    }

    this._hideField = this._hideField.bind(this);
    this._showField = this._showField.bind(this);
  }

  _hideField(fieldName) {
    // Make a copy of the state
    let newState = this.state;

    // Set the selected form to active
    newState.formFields[fieldName].currentlyActive = false;

    // Set the selected link to inactive
    newState.newFormLinks[fieldName].currentlyActive = true;

    console.log(newState);

    // Assign the newState to state
    this.setState(newState);
  }

  _showField(fieldName) {
    // Make a copy of the state
    let newState = this.state;

    // Set the selected form to active
    newState.formFields[fieldName].currentlyActive = true;

    // Set the selected link to inactive
    newState.newFormLinks[fieldName].currentlyActive = false;

    // Assign the newState to state
    this.setState(newState);
  }

  render() {
    return(
      <main>
        <h2>Create a Custom Tile</h2>
        <div className='pageContent'>
          <div className='row'>
            <div className='column'>
              <form>
                {_.map(this.state.formFields, (field, fieldName) => {
                  if(field.currentlyActive) {
                    return (
                      <div key={fieldName}>
                        {field.innerJSX}
                        <span onClick={() => this._hideField(fieldName)}>
                          X
                        </span>
                      </div>
                    );
                  }
                })}
              </form>
            </div>
            <div className='column'>
              <h3>Add more fields</h3>
              {_.map(this.state.newFormLinks, (link, linkName) => {
                if(link.currentlyActive) {
                  return (
                    <a href='#' key={linkName} onClick={(e) => {
                      e.preventDefault();
                      this._showField(linkName);
                    }}>
                      {link.text}
                    </a>
                  )
                }
              })}
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default TileEditor;
