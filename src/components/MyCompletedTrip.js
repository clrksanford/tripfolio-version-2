// Modules
import React, {Component} from 'react';
import { hashHistory, Link } from 'react-router';
import axios from 'axios';
import _ from 'lodash';

// Components
import AlertModal from './AlertModal';
import CompletedCustomTile from './CompletedCustomTile';
import Header from './Header';
import TileEditorModal from './TileEditorModal';
import UsersTile from './UsersTile';

// Styles and images
import '../styles/completedtrip.css';

class MyCompletedTripPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTrip: {},
      alertModalClass: 'hidden',
      modalClass: 'hidden',
      userTiles: []
    }

    this._closeModal = this._closeModal.bind(this);
    this._deleteTrip = this._deleteTrip.bind(this);
    this._showModal = this._showModal.bind(this);
    this._showSavedModal = this._showSavedModal.bind(this);
  }

  componentDidMount() {
    let { tripId } = this.props.params;

    axios.get(`https://lit-garden-98394.herokuapp.com/trips/${tripId}`)
      .then((response) => {
        let activeTrip = response.data;

        this.setState({ activeTrip });
      })

    axios.get(`https://lit-garden-98394.herokuapp.com/find-tile-by-trip/${tripId}`)
      .then((response) => {
        let userTiles = response.data;

        this.setState({ userTiles });
      })
  }

  _closeModal() {
    this.setState({
      alertModalClass: 'hidden',
      modalClass: 'hidden'
    })
  }

  _deleteTrip() {
    let {tripId} = this.props.params;

    axios.delete(`https://lit-garden-98394.herokuapp.com/trips/${tripId}`)
      .then((response) => {
        hashHistory.push('/');
      })
      .catch(err => console.error(err))
  }

  _showModal() {
    this.setState({alertModalClass:''});
  }

  _showSavedModal(index) {
    let selectedTile = this.state.userTiles[index];

    this.setState({
      modalButton: 'edit',
      modalClass: '',
      selectedTile: selectedTile,
      selectedTileIndex: index
    })
  }

  render() {
    let { _id, destForURL, destination } = this.state.activeTrip;
    destination = _.startCase(destination);

    return(
      <main id="main">
        <Header firebase={this.props.firebase} />
        <div id="newTrips" >
          <h2>My Trip To {destination}</h2>
            {/* STRETCH: switch to make your trip public or private */}
          <ol className="breadcrumb">
            <li><Link id="breadcrumb-nav" className="active" to={`/trip-builder/${destForURL}/${_id}`}>Edit</Link></li>
            <li>
              <a id="breadcrumb-nav" className="active" href="#"
                onClick={(e) => {
                  e.preventDefault();
                  this._showModal();
              }}>
                Delete
              </a>
            </li>
          </ol>
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
          modalButton=''
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

export default MyCompletedTripPage;
