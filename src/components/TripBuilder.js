// Modules
import React, {Component} from 'react';
import { Link, hashHistory } from 'react-router';
import axios from 'axios';
import _ from 'lodash';

// Components
import AlertModal from './AlertModal';
import CompletedCustomTile from './CompletedCustomTile';
import SuggestionBox from './SuggestionBox';
import TileEditorModal from './TileEditorModal';
import UsersTile from './UsersTile';
import Header from './Header';

// Styles and images
import "../styles/tripbuilder.css";

class TripBuilder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTrip: {},
      alertModalClass: 'hidden',
      results: [],
      modalButton: '',
      modalClass: 'hidden',
      userTiles: []
    }

    this._addTile = this._addTile.bind(this);
    this._axiosCall = this._axiosCall.bind(this);
    this._closeModal = this._closeModal.bind(this);
    this._createCustomTile = this._createCustomTile.bind(this);
    this._setActiveTab = this._setActiveTab.bind(this);
    this._showModal = this._showModal.bind(this);
    this._showAlertModal = this._showAlertModal.bind(this);
    this._loadUsersTiles = this._loadUsersTiles.bind(this);
    this._removeYelpListing = this._removeYelpListing.bind(this);
    this._deleteTile = this._deleteTile.bind(this);
    this._showSavedModal = this._showSavedModal.bind(this);
    this._routeToProfile = this._routeToProfile.bind(this);
    this._renderModalButton = this._renderModalButton.bind(this);
  }

  componentDidMount() {
    this._axiosCall();

    let { tripId } = this.props.params;

    axios.get(`https://lit-garden-98394.herokuapp.com/trips/${tripId}`)
      .then((response) => {
        let activeTrip = response.data;

        this.setState({ activeTrip });
      })

    this._loadUsersTiles();
  }

  _createCustomTile(attractionName) {
    let { creatorId } = this.state.activeTrip;
    let { tripId } = this.props.params;

    axios.post('https://lit-garden-98394.herokuapp.com/travel-tiles', {
      _correspondingTrip: tripId,
      creatorId,
      name: attractionName
    })
      .then((response) => {
        let tile = response.data;

        hashHistory.push(`/tile-editor/${this.props.params.destination}/${tile._id}`);
      })
      .catch((err) => {
        if(err.response) {
          console.log(err.response);
        }
      })
  }

  _axiosCall(e) {
    let term;
    let destination = this.props.params.destination;
    let link = `https://thawing-cliffs-39852.herokuapp.com/${destination}`;

    // If the call originated from user clicking a link (as opposed to from the component mounting), handle the event
    if(e) {
      e.preventDefault();

      this._setActiveTab(e);

      // If the user has clicked a filter tab, get the term they are searching for and send a corresponding request to Yelp
      term = e.target.getAttribute("data-query");;

    } else {
      // By default, load results for tourist attractions
      term = "tourist%20attractions";
    }

    // Set term to state to access in database
    this.setState({ term });

    link += `/${term}`;

    axios.get(link)
      .then((response) => {
        let results = response.data.businesses;

        this.setState({ results });
      });
  }


  _loadUsersTiles() {
    let { tripId } = this.props.params;

    axios.get(`https://lit-garden-98394.herokuapp.com/find-tile-by-trip/${tripId}`)
      .then(response => {
        let userTiles = response.data;

        this.setState({ userTiles });
      })
      .catch(err => console.log(err))
  }

  _showModal(index) {
    let selectedTile = this.state.results[index];

    this.setState({
      modalButton: 'save',
      modalClass: '',
      selectedTile: selectedTile,
      selectedTileIndex: index
    })
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

  _renderModalButton() {
    let modalButton;

    if(this.state.modalButton === 'save') {
      modalButton = <button onClick={this._addTile} className='largeButton'>Save</button>
    } else if(this.state.modalButton === 'edit') {
      modalButton = <Link to={`tile-editor/${this.props.params.destination}/${this.state.selectedTile._id}`} className='largeButton'>Edit</Link>
    }

    return modalButton;
  }

  _closeModal() {
    this.setState({
      alertModalClass: 'hidden',
      modalClass: 'hidden'
    })
  }
  _addTile() {
    let { name } = this.state.selectedTile;
    let image = this.state.selectedTile['image_url'];
    let { creatorId } = this.state.activeTrip;
    let tripId = this.props.params.tripId;

    axios.post(`https://lit-garden-98394.herokuapp.com/travel-tiles`, {
      name,
      image,
      creatorId,
      _correspondingTrip: tripId
    })
      .then(response => {
        let newTile = response.data;

        let { userTiles } = this.state;
        userTiles.push(newTile);

        this.setState({
          modalClass: 'hidden',
          userTiles
        });

        this._removeYelpListing(this.state.selectedTileIndex);
      })
      .catch(err => console.log(err))
  }

  _setActiveTab(e) {
      // Remove active class from currently active link
      document.getElementsByClassName("active")[0].className = "";

      // Set the clikced tab to "active"
      e.target.className = "active";
  }

  _removeYelpListing(index) {
    let newList = _.remove(this.state.results, (result) => {
      return this.state.results.indexOf(result) !== index;
    });

    this.setState({
      results: newList
    })
  }

  _deleteTile(index) {
    let tileId = this.state.userTiles[index]._id;

    axios.delete(`https://lit-garden-98394.herokuapp.com/travel-tiles/${tileId}`)
      .then(response => {
        let { userTiles } = this.state;

        _.remove(userTiles, (tile, i) => {
          return i === index;
        })

        this.setState({ userTiles });

        this._closeModal();
      })
      .catch(err => console.log(err))
  }

  _routeToProfile() {
    this.props._loadUsersTrips(this.props.user);
    hashHistory.pushState('/profile');
  }

  _showAlertModal(index) {
    this.setState({
      alertModalClass: '',
      selectedTileIndex: index
    })
  }

  render() {
    let { _id, destForURL, destination } = this.state.activeTrip;
    destination = _.startCase(destination);

    let modalButton = this._renderModalButton();

    return(
      <div>
        <Header firebase={this.props.firebase} />
        <main>
          <h2>Trip Builder: <span id="destinationName">{destination}</span></h2>
          <nav id="tripBuilderNav">
            <ol className="breadcrumb">
              <li><a href="#"
                onClick={this._axiosCall}
                data-query="tourist%20attractions"
                className="active">
                  Attractions
              </a></li>
              <li><a href="#"
                onClick={this._axiosCall}
                data-query="restaurants">
                  Food
              </a></li>
              <li><a href="#"
                onClick={this._axiosCall}
                data-query="hotels">
                  Hotels
              </a></li>
              <li><a href="#"
                onClick={this._axiosCall}
                data-query="bars">
                  Bars
              </a></li>
            </ol>
            <Link className="largeButton"
              to={`/completed/myTrip/${destForURL}/${_id}`}>View Trip</Link>
          </nav>
          <form id='newCustomTile' onSubmit={(e) => {
            e.preventDefault();
            this._createCustomTile(this.refs.attraction.value);
          }}>
            <input id='newTripSubmit' type='text' placeholder='Attraction Name' ref='attraction'/>
            <input className='largeButton' type='submit' value='Create Custom Tile' />
          </form>
          <div>
            <div className="tileHeader">
              <h3>My Saved Tiles</h3>
            </div>
            <div id="myTilesContainer">
              {_.map(this.state.userTiles, (tile, index) => {
                let { _id, image, name } = tile;

                return (
                    <UsersTile index={index}
                      key={index}
                      image={image}
                      name={name}
                      _showAlertModal={() => this._showAlertModal(index)}
                      _showModal={() => this._showSavedModal(index)}
                      spanClass=''
                    />
                  )
              })}
            </div>
          </div>
          <SuggestionBox results={this.state.results} _showModal={this._showModal} />

          <TileEditorModal
            className={this.state.modalClass}
            _closeModal={this._closeModal}
            modalButton={modalButton}
            selectedTile={this.state.selectedTile}
          >
            <CompletedCustomTile tile={this.state.selectedTile}/>
          </TileEditorModal>
          <AlertModal className={this.state.alertModalClass}
            _closeModal={this._closeModal}
            modalFunction={() => this._deleteTile(this.state.selectedTileIndex)}
            newTripTitle="Delete Tile"
            modalMessage="You are about to delete this tile forever!"
            modalButton="Delete"
          />
        </main>
      </div>
    );
  }
}

export default TripBuilder;
