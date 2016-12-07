// Modules
import React, {Component} from 'react';
import axios from 'axios';
import _ from 'lodash';
import { Link, hashHistory } from 'react-router';
import { connect } from 'react-redux';

// Components
import SuggestionBox from './SuggestionBox';
import TravelTileModal from './TravelTileModal';
import UsersTile from './UsersTile';
import Header from './Header';

// Styles and images
import "../styles/tripbuilder.css";

class TripBuilder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTrip: {},
      results: [],
      modalClass: 'hidden',
      destination: this.props.params.destination
    }
    this._axiosCall = this._axiosCall.bind(this);
    this._closeModal = this._closeModal.bind(this);
    this._createCustomTile = this._createCustomTile.bind(this);
    this._setActiveTab = this._setActiveTab.bind(this);
    this._showModal = this._showModal.bind(this);
    this._loadUsersTiles = this._loadUsersTiles.bind(this);
    this._removeYelpListing = this._removeYelpListing.bind(this);
    this._deleteTile = this._deleteTile.bind(this);
    this._showSavedModal = this._showSavedModal.bind(this);
    this._routeToProfile = this._routeToProfile.bind(this);
  }

  componentDidMount() {
    let { tripId } = this.props.params;

    axios.get(`https://lit-garden-98394.herokuapp.com/trips/${tripId}`)
      .then((response) => {
        let activeTrip = response.data;

        this.setState({ activeTrip });
      })
  }

  _createCustomTile(attractionName) {
    let creatorId = this.props.user.uid;
    let tripId = this.props.params.tripId;

    axios.post('https://lit-garden-98394.herokuapp.com/travel-tiles', {
      _correspondingTrip: tripId,
      creatorId,
      name: attractionName
    })
      .then((response) => {
        console.log(response);

        let tile = response.data;

        hashHistory.push(`/tile-editor/${tile._id}`);
      })
      .catch((err) => {
        if(err.response) {
          console.log(err.response);
        }
      })
  }

  _axiosCall(e) {
    let term;
    let destination = this.state.destination;
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
    let firebase = this.props.firebase;
    let uid = this.props.params.uid;
    let tripId = this.props.params.tripId;

    firebase.database().ref(`/tripbook/${uid}/${tripId}`).on('value', (snapshot) => {
      let tiles;

      if(snapshot.val()) {
        tiles = snapshot.val().places;
      }

      this.setState({ tiles });
    });
  }

  _showModal(index) {
    let selectedTile = this.state.results[index];

    this.setState({
      modalClass: '',
      selectedTile: selectedTile,
      selectedTileIndex: index
    })
  }

  _showSavedModal(index) {
    let selectedTile = this.state.tiles[index].tile;

    this.setState({
      modalClass: '',
      selectedTile: selectedTile,
      selectedTileIndex: index
    })
  }

  _closeModal() {
    this.setState({
      modalClass: 'hidden'
    })
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
    let uid = this.props.user.uid;
    let tripId = this.props.params.tripId;
    this.props.firebase.database().ref(`/tripbook/${uid}/${tripId}/places/${index}`).remove();
  }

  _routeToProfile() {
    this.props._loadUsersTrips(this.props.user);
    hashHistory.pushState('/profile');
  }

  render() {
    let { _id, destForURL, destination } = this.state.activeTrip;
    destination = _.startCase(destination);

    return(
      <main id="main">
        <div id="completed-nav">
          <Header firebase={this.props.firebase} />
        </div>
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
          <form onSubmit={(e) => {
            e.preventDefault();
            this._createCustomTile(this.refs.attraction.value);
          }}>
            <input type='text' placeholder='Attraction Name' ref='attraction'/>
            <input type='submit' value='Create Custom Tile' />
          </form>
          <Link className="largeButton"
            to={`/completed/myTrip/${destination}/${_id}`}>View Trip</Link>
        </nav>
        <div>
          <div className="tileHeader">
            <h3>My Saved Tiles</h3>
          </div>
          <div id="myTilesContainer">
            {_.map(this.state.tiles, (tile, index) => {
              let image = tile.tile["image_url"];
              let name = tile.tile.name;
              let snippet_text = tile.tile.snippet_text;
              // let url = tile.tile.url;

              return <UsersTile index={index} key={index} image={image} name={name} snippet_text={snippet_text} _deleteTile={this._deleteTile} _showModal={this._showSavedModal} spanClass='' />
            })}
          </div>
        </div>
        <SuggestionBox results={this.state.results} _showModal={this._showModal} />

        <TravelTileModal className={this.state.modalClass} _closeModal={this._closeModal} selectedTile={this.state.selectedTile} selectedTileIndex={this.state.selectedTileIndex} firebase={this.props.firebase} _handleClick={this.props._handleClick} user={this.props.user} destination={this.state.destination} tripId={this.props.params.tripId} _removeYelpListing={this._removeYelpListing} category={this.state.term}/>
      </main>
    );
  }
}

var mapStateToProps = ({ custom }) => {
  return {
    user: custom.user
  }
}

TripBuilder = connect(mapStateToProps, null)(TripBuilder);

export default TripBuilder;
