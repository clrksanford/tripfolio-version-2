// Modules
import React, {Component} from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import _ from 'lodash';

// Components
import AlertModal from './AlertModal';
import CompletedCustomTile from './CompletedCustomTile';
import Header from './Header';
import TileEditorModal from './TileEditorModal';
import UsersTile from './UsersTile';


class OtherCompletedTrip extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeLink: '',
      activeTrip: {},
      alertModalClass: 'hidden',
      modalButton: '',
      modalClass: 'hidden',
      modalMessage: '',
      modalTitle: '',
      ownTrip: {},
      selectedTile: {},
      selectedTileIndex: '',
      userTiles: []
    }

    this._closeModal = this._closeModal.bind(this);
    this._saveTileToOwnTrip = this._saveTileToOwnTrip.bind(this);
    this._saveToMyTrips = this._saveToMyTrips.bind(this);
    this._setActiveLink = this._setActiveLink.bind(this);
    this._setActiveTrip = this._setActiveTrip.bind(this);
    this._setTripTiles = this._setTripTiles.bind(this);
    this._showModal = this._showModal.bind(this);
    this._showSavedModal = this._showSavedModal.bind(this);
  }

  componentDidMount() {
    let { tripId } = this.props.params;

    this._setActiveTrip(tripId);

    this._setTripTiles(tripId);
  }

  _closeModal() {
    this.setState({
      alertModalClass: 'hidden',
      modalClass: 'hidden'
    })
  }

  _saveTileToOwnTrip() {
    let tile = this.state.selectedTile;
    let tripId = this.state.ownTrip._id;
    let creatorId = this.props.user.uid;
    let creatorUsername = this.props.user.displayName;
    let { destForURL, destination } = this.state.ownTrip;

    let newTile = Object.assign({}, tile, {
      _correspondingTrip: tripId,
      creatorId,
      creatorUsername
    });

    delete newTile._id;

    axios.post('https://lit-garden-98394.herokuapp.com/travel-tiles',
      newTile)
      .then(response => {
        let modalMessage = <p>Tile has been saved to your {_.startCase(destination)} trip! <Link to={`completed/myTrip/${destForURL}/${tripId}`}>View your trip</Link>.</p>
        this.setState({
          modalMessage
        })
      })
  }

  _saveToMyTrips() {
    let targetTrip = this.state.activeTrip;
    let creatorId = this.props.user.uid;
    let creatorUsername = this.props.user.displayName;

    let tripToSave = Object.assign({}, targetTrip, {
      creatorId,
      creatorUsername
    });

    // Post request to save the trip
    axios.post('https://lit-garden-98394.herokuapp.com/trips', tripToSave)
      .then(response => {
        let trip = response.data;
        let newTripId = trip._id;

        // Then get all tiles corresponding to trip and save those with the new tripId
        let correspondingTiles = this.state.userTiles;

        correspondingTiles.forEach(tile => {
          let newTile = Object.assign({}, tile, {
            _correspondingTrip: newTripId,
            creatorId,
            creatorUsername
          });

          // Remove the old Mongo id so taht a new one can be created
          delete newTile._id;

          // Post new tile to the newly copied trip
          axios.post('https://lit-garden-98394.herokuapp.com/travel-tiles', newTile)
            .then(response => console.log(response))
        });
      })
  }

  _setActiveLink(e) {
      // If there is a currently active link, remove active class
      if(document.getElementsByClassName('active').length > 0) {
        document.getElementsByClassName("active")[0].className = "";
      }

      // Set the clikced tab to "active"
      e.target.className = "active";
  }

  _setActiveTrip(tripId) {
    axios.get(`https://lit-garden-98394.herokuapp.com/trips/${tripId}`)
      .then((response) => {
        let activeTrip = response.data;

        this.setState({ activeTrip });
      })
  }

  _setTripTiles(tripId) {
    axios.get(`https://lit-garden-98394.herokuapp.com/find-tile-by-trip/${tripId}`)
      .then((response) => {
        let userTiles = response.data;

        this.setState({ userTiles });
      })
  }

  _showModal() {
    let modalButton = <button className='largeButton'
      onClick={this._saveTileToOwnTrip}>Save</button>
    let modalTitle = "Choose a trip to add the tile";
    let modalMessage =
      <ul>
        {_.map(this.props.userTrips, (trip, index) => {
          let { _id, creatorId, creatorUsername, destForURL, destination } = trip;
          destination = _.startCase(destination);

          return (
            <li key={index}>
              <a href='#'
                className={
                  this.state.activeLink === index ? 'active' : ''
                }
                onClick={(e) => {
                  e.preventDefault();

                  this._setActiveLink(e);

                  this.setState({
                    ownTrip: trip,
                    activeLink: index
                  });
                }}
              >
                {destination}
              </a>
            </li>
          );
        })}
      </ul>

    this.setState({
      alertModalClass: '',
      modalButton,
      modalMessage,
      modalTitle
    });
  }

  _showSavedModal(index) {
    let selectedTile = this.state.userTiles[index];

    let modalButton =
      <button className='largeButton'
        onClick={this._showModal}
      >
        Add to your trip
      </button>

    this.setState({
      modalButton,
      modalClass: '',
      selectedTile,
      selectedTileIndex: index
    })
  }

  render() {
    let { _id, creatorUsername, destination } = this.state.activeTrip;
    destination = _.startCase(destination);

    return(
      <main id="main">
        <Header firebase={this.props.firebase} />
        <div id="newTrips" >
          <h2>{creatorUsername}'s Trip To {destination}</h2>
          <nav>
            <button className='largeButton'
              onClick={this._saveToMyTrips}>
              Save to your trips
            </button>
          </nav>
        </div>
        <div id="completedTrip" className="container">
          {_.map(this.state.userTiles, (tile, index) => {
            let { _id, image, name } = tile;

            return <UsersTile index={index}
              key={index}
              image={image}
              name={name}
              _deleteTile={this._deleteTile}
              _showModal={() => this._showSavedModal(index)}
              spanClass='hidden'/>
          })}
        </div>
        <TileEditorModal
          className={this.state.modalClass}
          _closeModal={this._closeModal}
          modalButton={this.state.modalButton}
          selectedTile={this.state.selectedTile}
        >
          <CompletedCustomTile tile={this.state.selectedTile}/>
        </TileEditorModal>
        <AlertModal className={this.state.alertModalClass}
          _closeModal={this._closeModal}
          modalFunction={this._saveTileToOwnTrip}
          modalTitle={this.state.modalTitle}
          modalMessage={this.state.modalMessage}
          modalButton="Add"
        />
      </main>
    );
  }
}

export default OtherCompletedTrip;
