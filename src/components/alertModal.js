import React, { Component } from 'react';
import { Link } from 'react-router';

class AlertModal extends Component {
  constructor(props) {
    super(props);
    this._deleteTrip = this._deleteTrip.bind(this);
  }

  _deleteTrip() {
    let uid = this.props.uid;
    let tripId = this.props.tripId;

    this.props.firebase.database().ref(`/tripbook/${uid}/${tripId}`).remove();
  }

  render() {
    return(
      <div>
        <div id="modalBackground" className={this.props.className} onClick={this.props._closeModal}>
          <div id="modalContainerDelete">
            <div id="modalHeaderDelete">
              <span id="closeModal" onClick={this.props._closeModal}>x</span>
            </div>
            <div id="modalContentDelete">
              <h4>{this.props.modalTitle}</h4>
              <p>{this.props.modalMessage}</p>
            </div>
            <div id="modalFooter">
            <Link to="/Profile" className={this.props.buttonClass} onClick={this._deleteTrip}>Delete</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AlertModal;
