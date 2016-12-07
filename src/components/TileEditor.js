import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import _ from 'lodash';

import TileEditorModal from './TileEditorModal';
import Address from './TileFormFields/Address';
import Entrance from './TileFormFields/Entrance';
import Image from './TileFormFields/Image';
import OpeningHours from './TileFormFields/OpeningHours';
import TileLinkAdder from './TileFormFields/TileLinkAdder';
import Transit from './TileFormFields/Transit';


class TileEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeForm: '',
      activeTile: {},
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
        image: {
          text: 'Add an Image',
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
    this.handleSubmit = this.handleSubmit.bind(this);
    this._hideField = this._hideField.bind(this);
    this._showField = this._showField.bind(this);
    this._showFieldModal = this._showFieldModal.bind(this);
  }

  componentDidMount() {
    axios.get(`https://lit-garden-98394.herokuapp.com/travel-tiles/${this.props.params.tileId}`)
      .then((response) => {
        let activeTile = response.data;

        // Set the active tile to state
        this.setState({
          activeTile
        })

        // Deactive newFormLinks for fields already populated
        _.map(this.state.newFormLinks, (link, linkName) => {
          if(!_.isEmpty(this.state.activeTile[linkName])) {
            let newFormLinks = this.state.newFormLinks;
            newFormLinks[linkName].currentlyActive = false;

            this.setState({ newFormLinks });
          }
        })
      })
      .catch(err => console.log(err))
  }

  _closeModal() {
    this.setState({
      modalClass: 'hidden'
    })
  }

  handleSubmit(values) {
    let { tileId } = this.props.params
    let {
      notes,

      // Image
      image,

      // Address
      street1, street2, city, country, zip, phone,

      // Entrance
      entrance1label, entrance1price,
      entrance2label, entrance2price,
      entrance3label, entrance3price,
      entrance4label, entrance4price,
      entrance5label, entrance5price,

      // OpeningHours
      day1value, day1closed, day1from1, day1to1, day1from2, day1to2, day1from3, day1to3,

      day2value, day2closed, day2from1, day2to1, day2from2, day2to2, day2from3, day2to3,

      day3value, day3closed, day3from1, day3to1, day3from2, day3to2, day3from3, day3to3,

      day4value, day4closed, day4from1, day4to1, day4from2, day4to2, day4from3, day4to3,

      day5value, day5closed, day5from1, day5to1, day5from2, day5to2, day5from3, day5to3,

      day6value, day6closed, day6from1, day6to1, day6from2, day6to2, day6from3, day6to3,

      day7value, day7closed, day7from1, day7to1, day7from2, day7to2, day7from3, day7to3,

      // Transit
      transitNotes,
      transitLink1Name, transitLink1URL,
      transitLink2Name, transitLink2URL,

      //Helpful Links
      link1Name, link1URL,
      link2Name, link2URL,
      link3Name, link3URL,
      link4Name, link4URL,
      link5Name, link5URL,
      link6Name, link6URL
    } = values;


    /*--- BEGIN ADDRESS ---*/

    let address = {
      street1,
      street2,
      city,
      country,
      zip,
      phone
    }

    /*--- BEGIN ENTRANCE ---*/

    let entrance = {
      entrance1: {
        label: entrance1label,
        price: entrance1price
      },
      entrance2: {
        label: entrance2label,
        price: entrance2price
      },
      entrance3: {
        label: entrance3label,
        price: entrance3price
      },
      entrance4: {
        label: entrance4label,
        price: entrance4price
      },
      entrance5: {
        label: entrance5label,
        price: entrance5price
      }
    }

    /*--- BEGIN OPENING HOURS ---*/

    let openingHours = {
      day1: {
        value: day1value,
        closed: day1closed,
        from1: day1from1,
        to1: day1to1,
        from2: day1from2,
        to2: day1to2,
        from3: day1from3,
        to3: day1to3
      },
      day2: {
        value: day2value,
        closed: day2closed,
        from1: day2from1,
        to1: day2to1,
        from2: day2from2,
        to2: day2to2,
        from3: day2from3,
        to3: day2to3
      },
      day3: {
        value: day3value,
        closed: day3closed,
        from1: day3from1,
        to1: day3to1,
        from2: day3from2,
        to2: day3to2,
        from3: day3from3,
        to3: day3to3
      },
      day4: {
        value: day4value,
        closed: day4closed,
        from1: day4from1,
        to1: day4to1,
        from2: day4from2,
        to2: day4to2,
        from3: day4from3,
        to3: day4to3
      },
      day5: {
        value: day5value,
        closed: day5closed,
        from1: day5from1,
        to1: day5to1,
        from2: day5from2,
        to2: day5to2,
        from3: day5from3,
        to3: day5to3
      },
      day6: {
        value: day6value,
        closed: day6closed,
        from1: day6from1,
        to1: day6to1,
        from2: day6from2,
        to2: day6to2,
        from3: day6from3,
        to3: day6to3
      },
      day7: {
        value: day7value,
        closed: day7closed,
        from1: day7from1,
        to1: day7to1,
        from2: day7from2,
        to2: day7to2,
        from3: day7from3,
        to3: day7to3
      }
    }

    /*--- BEGIN TRANSIT ---*/

    let transit = {
      notes: transitNotes,
      transitLink1: {
        name: transitLink1Name,
        url: transitLink1URL
      },
      transitLink2: {
        name: transitLink2Name,
        url: transitLink2URL
      }
    }

    /*--- BEGIN LINKS ---*/

    let helpfulLinks = {
      helpfulLink1: {
        name: link1Name,
        url: link1URL
      },
      helpfulLink2: {
        name: link2Name,
        url: link2URL
      },
      helpfulLink3: {
        name: link3Name,
        url: link3URL
      },
      helpfulLink4: {
        name: link4Name,
        url: link4URL
      },
      helpfulLink5: {
        name: link5Name,
        url: link5URL
      },
      helpfulLink6: {
        name: link6Name,
        url: link6URL
      }
    }

    function checkEmptyProp(objectProp) {
      let newObj = _.omitBy(objectProp, _.isNil);
      let result = false;

      if(_.isEmpty(newObj)) {
        result = true;
      }

      return result;
    }

    address = _.omitBy(address, checkEmptyProp);
    entrance = _.omitBy(entrance, checkEmptyProp);
    helpfulLinks = _.omitBy(helpfulLinks, checkEmptyProp);
    image = _.omitBy(image, checkEmptyProp);
    notes = _.omitBy(notes, checkEmptyProp);
    openingHours = _.omitBy(openingHours, checkEmptyProp);
    transit = _.omitBy(transit, checkEmptyProp);

    let options = { address, entrance, helpfulLinks, image, notes, openingHours, transit };

    options = _.omitBy(options, _.isEmpty || _.isNil);

    // console.log(options);
    // console.log('address', address);
    // console.log('entrance', entrance);
    // console.log('helpfulLinks', helpfulLinks);
    // console.log('image', image);
    // console.log('notes', notes);
    // console.log('openingHours', openingHours);
    // console.log('transit', transit);

    axios.put(`https://lit-garden-98394.herokuapp.com/travel-tiles/${tileId}`, options)
      .then((response) => {
        console.log(response);

        // Close modal
      })
      .catch(err => console.log(err))
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
    let { tileId } = this.props.params;

    switch(fieldName) {
      case 'address':
        activeForm = <Address tileId={tileId} onSubmit={this.handleSubmit} />;
        break;
      case 'entrance':
        activeForm = <Entrance tileId={tileId} onSubmit={this.handleSubmit} />;
        break;
      case 'image':
        activeForm = <Image tileId={tileId} onSubmit={this.handleSubmit} />;
        break;
      case 'openingHours':
        activeForm = <OpeningHours tileId={tileId} onSubmit={this.handleSubmit} />;
        break;
      case 'links':
        activeForm = <TileLinkAdder tileId={tileId} onSubmit={this.handleSubmit} />;
        break;
      case 'transit':
        activeForm = <Transit tileId={tileId} onSubmit={this.handleSubmit} />;
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
    if(this.state.activeTile) {
      var { street1, city, country, zip } = this.state.activeTile.address || ''
        , { image } = this.state.activeTile;
    }

    return(
      <main>
        <h2>Create a Custom Tile</h2>
        <div className='pageContent'>
          <div className='row'>
            <div className='column'>
              <h3>My Info for {this.state.activeTile.name || ''}</h3>
              <img src={image} alt='Beautiful view of wherever you want to be!' />
              <p>
                {street1}
                {city}, {country}
                {zip}
              </p>
            </div>
            <div className='column'>
              <h3>Add more fields</h3>
              <TileLinkAdder onSubmit={this.handleSubmit} />
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

var mapStateToProps = ({ form }) => {
  return {
    formInfo: form
  }
}

TileEditor = connect(mapStateToProps, null)(TileEditor);

export default TileEditor;
