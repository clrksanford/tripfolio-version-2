// Modules
import React, { Component } from 'react';

// Styles and images
import '../styles/modal.css';
import addButton from '../../public/assets/add.png';
import exitButton from '../../public/assets/exit.png';

class TravelTileModal extends Component {
  constructor(props) {
    super(props);

    this._addTile = this._addTile.bind(this);
    this._removeYelpListing = this._removeYelpListing.bind(this);
  }

  _addTile() {
    let firebase = this.props.firebase;
    let uid = this.props.user.uid;
    let tripId = this.props.tripId;
    let tile = this.props.selectedTile;
    let category = this.props.category;

    firebase.database().ref(`/tripbook/${uid}/${tripId}/places`).push({
      tile,
      category
    }).then(() => {
      // Delete the original yelp listing from results so that it does not render on the page

      this._removeYelpListing(this.props.selectedTileIndex);
    })
  }

  _removeYelpListing(index) {
    this.props._removeYelpListing(index);
  }

  render() {
    if(this.props.selectedTile) {
      var { image, name } = this.props.selectedTile;
    } else {
      name = "Placeholder Title";
      image = "#";
    }

    return(
      <div>
        <div id="modalBackground" className={this.props.className} onClick={this.props._closeModal}>
          <div id="modalContainer">
            <img src={image} alt="Tile background of the place you selected"
              id="modalImage"/>
            <div id="modalHeader" className="clearfix">
              <img src={exitButton} alt="Close tile" id="closeModal"
                onClick={this.props._closeModal} />
            </div>
            <div id="modalContent">
              <h4>{name}</h4>
              {/* <p>{snippet_text}</p> */}
            </div>
            <div id="modalFooter">
              {/* <a href={url} target="_blank"
              className="largeButton">Visit Site</a> */}
              <img src={addButton}
                alt="Save this tile to your trip!"
                id="addButton"
                onClick={this._addTile}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TravelTileModal;
