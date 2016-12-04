import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import { connect } from 'react-redux';
import axios from 'axios';

import '../styles/alertmodal.css';

class AlertModal extends Component {
  constructor(props) {
    super(props);
    this._deleteTrip = this._deleteTrip.bind(this);
  }

  _deleteTrip() {
    let tripId = this.props.selectedTrip._id;

    axios.delete(`https://lit-garden-98394.herokuapp.com/trips/${tripId}`)
      .then((response) => {
        console.log(response);

        hashHistory.push('/profile');
      })
      .catch(err => console.error(err))
  }

  render() {
    return(
      <div>
        <div id="modalBackground" className={this.props.className} onClick={this.props._closeModal}>
          <div id="alertContainer">
            <div id="alertHeader">
              <span id="closeModal" onClick={this.props._closeModal}>x</span>
            </div>
            <div id="alertContent">
              <h4>{this.props.modalTitle}</h4>
              <p>{this.props.modalMessage}</p>
            </div>
            <div id="alertFooter">
              <button className="largeButton" onClick={this._deleteTrip}>Delete</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

var mapStateToProps = ({ selectedTrip }) => {
  return {
    selectedTrip
  }
}

AlertModal = connect(mapStateToProps, null)(AlertModal);

export default AlertModal;
