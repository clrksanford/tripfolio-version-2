// Modules
import React, {Component} from 'react';
import { hashHistory, Link } from 'react-router';
import axios from 'axios';
import _ from 'lodash';

// Components
import AlertModal from './AlertModal';
import Header from './Header';
import UsersTile from './UsersTile';


class OtherCompletedTrip extends Component {
  constructor(props) {
    super(props);

    this.state = {
      alertModalClass: 'hidden',
      activeTrip: {},
      userTiles: []
    }
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

  render() {
    let { _id, creatorUsername, destForURL, destination } = this.state.activeTrip;
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
