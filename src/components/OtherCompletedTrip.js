// Modules
import React, {Component} from 'react';
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
      activeTrip: {},
      alertModalClass: 'hidden',
      modalClass: 'hidden',
      selectedTile: {},
      selectedTileIndex: '',
      userTiles: []
    }

    this._closeModal = this._closeModal.bind(this);
    this._saveTileToOwnTrip = this._saveTileToOwnTrip.bind(this);
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
    let _correspondingTrip = '584ae6e1cef308001160c77b';
    let creatorId = 'f3t0weDNGoP1mY5Fs6w0MHSFUup1';
    let creatorUsername = 'Clark Sanford';

    let newTile = Object.assign({}, tile, {
      _correspondingTrip,
      creatorId,
      creatorUsername
    });

    delete newTile._id;

    axios.post('https://lit-garden-98394.herokuapp.com/travel-tiles',
      newTile)
      .then(response => console.log(response))
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
    this.setState({
      alertModalClass: ''
    });
  }

  _showSavedModal(index) {
    let selectedTile = this.state.userTiles[index];

    let modalButton = <button onClick={this._saveTileToOwnTrip}>Add to your trip</button>

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
            {/* STRETCH: switch to make your trip public or private */}
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
          modalFunction={this._deleteTrip}
          newTripTitle="Delete Post"
          modalMessage="You are about to delete this trip forever!"
          modalButton="Delete"
        />
      </main>
    );
  }
}

export default OtherCompletedTrip;
