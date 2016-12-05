import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';

import TileEditorModal from './TileEditorModal';
import Address from './TileFormFields/Address';
import Entrance from './TileFormFields/Entrance';
import OpeningHours from './TileFormFields/OpeningHours';
import TileLinks from './TileFormFields/TileLinks';
import Transit from './TileFormFields/Transit';


class TileEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeForm: '',
      modalClass: 'hidden',
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

    this._closeModal = this._closeModal.bind(this);
    this._hideField = this._hideField.bind(this);
    this._showField = this._showField.bind(this);
    this._showFieldModal = this._showFieldModal.bind(this);
  }

  componentDidMount() {
    axios.get(`https://lit-garden-98394.herokuapp.com/travel-tiles/${this.props.params.tileId}`)
      .then(response => console.log('tile editor did mount', response))
      .catch(err => console.log(err))
  }

  _closeModal() {
    this.setState({
      modalClass: 'hidden'
    })
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

  _showFieldModal(fieldName) {
    let activeForm;

    switch(fieldName) {
      case 'address':
        activeForm = <Address />;
        break;
      case 'entrance':
        activeForm = <Entrance />;
        break;
      case 'openingHours':
        activeForm = <OpeningHours />;
        break;
      case 'tileLinks':
        activeForm = <TileLinks />;
        break;
      case 'transit':
        activeForm = <Transit />;
        break;
      default:
        activeForm = '';
    }

    this.setState({
      activeForm,
      modalClass: ''
    });
  }

  render() {
    return(
      <main>
        <h2>Create a Custom Tile</h2>
        <div className='pageContent'>
          <div className='row'>
            <div className='column'>
              <h3>I am just a placeholder for now</h3>
              {/* <form>
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
              </form> */}
            </div>
            <div className='column'>
              <h3>Add more fields</h3>
              {_.map(this.state.newFormLinks, (link, linkName) => {
                if(link.currentlyActive) {
                  return (
                    <a href='#' key={linkName} onClick={(e) => {
                      e.preventDefault();
                      this._showFieldModal(linkName);
                    }}>
                      {link.text}
                    </a>
                  )
                }
              })}
            </div>
          </div>
        </div>
        <TileEditorModal className={this.state.modalClass}
          _closeModal={this._closeModal}
          modalButton='Save'>
          {this.state.activeForm}
        </TileEditorModal>
      </main>
    )
  }
}

export default TileEditor;
