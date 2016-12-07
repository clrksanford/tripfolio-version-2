import React, { Component } from 'react';

class UsersTile extends Component {
  constructor(props) {
    super(props);

    this._showModal = this._showModal.bind(this);
    this._deleteTile = this._deleteTile.bind(this);
  }

  _showModal() {
    this.props._showModal(this.props.index);
  }

  _deleteTile(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props._deleteTile(this.props.index);
    // this.props.firebase.database().ref(`/UsersTile/${this.props.uid}`).remove();
  }

  render() {
    return(
      <div className="suggestionTile" key={this.props.index} onClick={this._showModal}>
        <span
          className={this.props.spanClass}
          onClick={this._deleteTile}>
            x
        </span>
        <div>
          <img src={this.props.image}
            className='tileImage'
            alt="This will be filled by Yelp API" />
          <h6>{this.props.name}</h6>
          <p>{this.props.term}</p>
        </div>
      </div>
    );
  }
}

export default UsersTile;
