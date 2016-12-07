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
      alertModalClass: 'hidden',
      activeTrip: {}
    }
  }

  componentDidMount() {
    let { tripId } = this.props.params;

    axios.get(`https://lit-garden-98394.herokuapp.com/trips/${tripId}`)
      .then((response) => {
        let activeTrip = response.data;

        this.setState({ activeTrip });
      })
    // this.props.setSelectedTrip(this.props.params.tripId);
  }

  // _closeModal() {
  //   this.setState({alertModalClass: 'hidden'});
  // }
  //
  // _deleteTrip() {
  //   let tripId = this.props.selectedTrip._id;
  //
  //   axios.delete(`https://lit-garden-98394.herokuapp.com/trips/${tripId}`)
  //     .then((response) => {
  //       hashHistory.push('/profile');
  //     })
  //     .catch(err => console.error(err))
  // }

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

  // _showModal(e) {
  //   e.preventDefault();
  //
  //   this.setState({alertModalClass:''});
  // }

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
              <li><a id="breadcrumb-nav" className="active" href="#" onClick={this._showModal}>Delete</a></li>
            </ol>
          </div>
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

// var mapStateToProps = ({ custom }) => {
//   return {
//     userTrips: custom.userTrips,
//     user: custom.user
//   }
// }

// var mapDispatchToProps = (dispatch) => {
//   return {
//     setSelectedTrip: (tripId) => dispatch(getSelectedTrip(tripId))
//   }
// }

// CompletedTripPage = connect(null, mapDispatchToProps)(CompletedTripPage);

export default CompletedTripPage;
