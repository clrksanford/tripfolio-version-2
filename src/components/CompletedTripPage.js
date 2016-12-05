// Modules
import React, {Component} from 'react';
import { hashHistory, Link } from 'react-router';
import { connect } from 'react-redux';
import axios from 'axios';
import _ from 'lodash';

// Components
// import UsersTile from './UsersTile';
import Header from './Header';
import AlertModal from './AlertModal';

// Redux actions
import getSelectedTrip from '../actions/getSelectedTrip';

// Styles and images
import '../styles/completedtrip.css';

class CompletedTripPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      alertModalClass: 'hidden'
    }

    this._checkUser = this._checkUser.bind(this);
    this._closeModal = this._closeModal.bind(this);
    this._deleteTrip = this._deleteTrip.bind(this);
    this._renderMyTrip = this._renderMyTrip.bind(this);
    this._renderOtherUsersTrip = this._renderOtherUsersTrip.bind(this);
    // this._renderTiles = this._renderTiles.bind(this);
    this._showModal = this._showModal.bind(this);
  }

  componentDidMount() {
    this.props.setSelectedTrip(this.props.params.tripId);
  }

  _checkUser() {
    if(!_.isEmpty(this.props.user) && !_.isEmpty(this.props.selectedTrip)) {
      let currentUserId = this.props.user.uid;
      let { creatorId } = this.props.selectedTrip;

      // Check if this trip belongs to currently logged in user
      if(currentUserId === creatorId) {
        return this._renderMyTrip();
      } else {
        return this._renderOtherUsersTrip();
      }
    }
  }

  _closeModal() {
    this.setState({alertModalClass: 'hidden'});
  }

  _deleteTrip() {
    let tripId = this.props.selectedTrip._id;

    axios.delete(`https://lit-garden-98394.herokuapp.com/trips/${tripId}`)
      .then((response) => {
        hashHistory.push('/profile');
      })
      .catch(err => console.error(err))
  }

  _renderMyTrip() {
    let { _id, destination } = this.props.selectedTrip;
    destination = _.startCase(destination);

    return (
      <div id="newTrips" >
        <h2>My Trip To {destination}</h2>
          {/* STRETCH: switch to make your trip public or private */}
        <ol className="breadcrumb">
          <li><Link id="breadcrumb-nav" className="active" to={`/trip-builder/${destination}/${_id}`}>Edit</Link></li>
          <li><a id="breadcrumb-nav" className="active" href="#" onClick={this._showModal}>Delete</a></li>
        </ol>
      </div>
    );
  }

  _renderOtherUsersTrip() {
    let { creatorUsername, destination } = this.props.selectedTrip;
    destination = _.startCase(destination);

    return (
      <div className="pageHeader">
        <h2>{creatorUsername}'s trip to {destination}</h2>
        <nav>
          {/* TODO options to "add to your saved trips" and "like" will be added later */}
        </nav>
      </div>
    );
  }
  // _renderTiles(query) {
  //   let tileList = _.filter(this.state.tiles, (tile, index) => {
  //     return tile.category === query;
  //   });
  //
  //   return (_.map(tileList, (tile, index) => {
  //       let image = tile.tile["image_url"];
  //       let name = tile.tile.name;
  //       // let url = tile.tile.url;
  //
  //       return <UsersTile index={index} key={index} image={image} name={name} _deleteTile={this._deleteTile} _showModal={this._showSavedModal} spanClass="hidden" />
  //     })
  //   );
  // }

  _showModal(e) {
    e.preventDefault();

    this.setState({alertModalClass:''});
  }

  render() {
    return(
        <main id="main">
          <Header firebase={this.props.firebase} />
          {this._checkUser()}
            {/* <div id="completedTrip" className="container">
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
            </div> */}
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

var mapStateToProps = ({ selectedTrip, user }) => {
  return {
    selectedTrip,
    user
  }
}

var mapDispatchToProps = (dispatch) => {
  return {
    setSelectedTrip: (tripId) => dispatch(getSelectedTrip(tripId))
  }
}

CompletedTripPage = connect(mapStateToProps, mapDispatchToProps)(CompletedTripPage);

export default CompletedTripPage;
