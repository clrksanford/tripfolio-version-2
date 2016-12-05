import React, { Component } from 'react';
import _ from 'lodash';

class TileEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formFields: [
        <input type='text' placeholder='Title' ref='title'/>,
        <textarea placeholder='Write some notes'></textarea>
      ],
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

    this._addField = this._addField.bind(this);
  }

  _addField(fieldName) {
    let newField;

    switch(fieldName) {
      case 'openingHours':
        newField = <input type='text' placeholder='Hours of operation'/>;
        break;
      default:
        return '';
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
              {_.map(this.state.newFormLinks, (link, linkName) => {
                if(link.currentlyActive) {
                  return (
                    <a href='#' key={linkName} onClick={(e) => {
                      e.preventDefault();

                      // Add the corresponding input field
                      this._addField(linkName);

                      // Set currentlyActive to false so that this link is no longer visible
                      this.state.newFormLinks[linkName].currentlyActive = false;
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
