// Modules
import React, {Component} from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import _ from 'lodash';

// Components
import UsersTile from './UsersTile';
import Header from './Header';
import AlertModal from './alertModal';

// Styles and images
import '../styles/completedtrip.css';

class CompletedTripPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ownerDispName: '',
      alertModalClass: 'hidden'
    }

    this._checkUser = this._checkUser.bind(this);
    this._renderMyTrip = this._renderMyTrip.bind(this);
    this._renderOtherUsersTrip = this._renderOtherUsersTrip.bind(this);
    this._renderTiles = this._renderTiles.bind(this);
    this._deleteTrip = this._deleteTrip.bind(this);
    this._showModal = this._showModal.bind(this);
    this._closeModal = this._closeModal.bind(this);
  }

  _deleteTrip(tripId) {
    let uid = this.props.user.uid;

    this.props.firebase.database().ref(`/tripbook/${uid}/${tripId}`).remove();
  }

  _checkUser() {
    let currentUser = this.props.user.uid;

    // The 'owner' of the trip (aka the uid of the person who created it) will need to be passed when the component is rendered
    let creator = this.props.params.uid;

    if(currentUser === creator) { // Later will be if(currentUser === creator)
      return this._renderMyTrip();
    } // Once functionality is added to see other people's trips, think of how to render
     else {
      return this._renderOtherUsersTrip();
    }
  }

  _renderMyTrip() {
    let owner = this.props.ownerId;
    let tripId = this.props.tripId;
    let destination = this.props.destination;

    return (
      <div id="newTrips" >
        <h2>My Trip To {destination}</h2>
          {/* STRETCH: switch to make your trip public or private */}
        <ol className="breadcrumb">
          <li><Link id="breadcrumb-nav" className="active" to={`/planner/${owner}/${tripId}/${destination}`}>Edit</Link></li>
          <li><a id="breadcrumb-nav" className="active" href="#" onClick={this._showModal}>Delete</a></li>
        </ol>
      </div>
    )
  }

  _renderOtherUsersTrip() {
    let username = this.state.username;
    let destination = this.props.destination;

    return (
      <div className="pageHeader">
        <h2>{username}'s trip to {destination}</h2>
        <nav>
          {/* options to "add to your saved trips" and "like" will be added later */}
        </nav>
      </div>
    );
  }

  componentDidMount() {
    let firebase = this.props.firebase;
    let owner = this.props.ownerId;
    let tripId = this.props.tripId;

    console.log(owner);
    console.log(tripId);

    firebase.database().ref(`/tripbook/${owner}/${tripId}`).once('value').then(snapshot => {
      let tiles = snapshot.val().places;
      let username = snapshot.val().username;

      this.setState({ tiles, username });
    });
  }

  _renderTiles(query) {
    let tileList = _.filter(this.state.tiles, (tile, index) => {
      return tile.category === query;
    });

    return (_.map(tileList, (tile, index) => {
        let image = tile.tile["image_url"];
        let name = tile.tile.name;
        // let url = tile.tile.url;

        return <UsersTile index={index} key={index} image={image} name={name} _deleteTile={this._deleteTile} _showModal={this._showSavedModal} spanClass="hidden" />
      })
    );
  }

  _showModal(e) {
    e.preventDefault();

    this.setState({alertModalClass:''});
  }

  _closeModal() {
    this.setState({alertModalClass: 'hidden'});
  }

  render() {
    let image = this.props.user.providerData ? this.props.user.providerData[0].photoURL : 'http://placehold.it/100x100'
    return(
        <main id="main">
          <div id="completed-nav">
            <Header firebase={this.props.firebase} />
          </div>
          <div id="pic-div">
            <div id="prof-pic">
              <img src={image} alt="Your profile avatar" id="profPic" />
            </div>
          </div>
          {this._checkUser()}
            <div id="completedTrip" className="container">
              <div className="row">
                <div className="col-sm-6">
                  <div id="restaurantTiles"
                  className="tileColumn">
                    <h4>Eat</h4>
                    {this._renderTiles('restaurants')}
                  </div>
                </div>
                <div className="col-sm-6">
                  <div id="hotelTiles"
                    className="tileColumn">
                    <h4>Sleep</h4>
                    {this._renderTiles('hotels')}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div id="attractionTiles"
                    className="tileColumn">
                    <h4>See</h4>
                    {this._renderTiles('tourist%20attractions')}
                  </div>
                </div>
                <div className="col-sm-6">
                  <div id="barTiles"
                    className="tileColumn">
                    <h4>Drink</h4>
                    {this._renderTiles('bars')}
                  </div>
                </div>
              </div>
            </div>
            <AlertModal className={this.state.alertModalClass} tripId={this.props.params.tripId} uid={this.props.params.uid} firebase={this.props.firebase} _closeModal={this._closeModal} newTripTitle="Delete Post" modalMessage="You are about to delete this trip forever!" />
        </main>
    );
  }
}

var mapStateToProps = ({tripId, ownerId, destination}) => {
  return {
    tripId,
    ownerId,
    destination
  }
}

CompletedTripPage = connect(mapStateToProps, null)(CompletedTripPage);

export default CompletedTripPage;
