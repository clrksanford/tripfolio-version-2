import React, { Component } from 'react';

class TravelTileModal extends Component {
  render() {
    return(
      <div>
        <div id="modalBackground" className={this.props.className} onClick={this.props._closeModal}>
          <div id="modalContainer">
            <div id="modalHeader">
              <span id="closeModal" onClick={this.props._closeModal}>x</span>
            </div>
            <div id="modalContent">
              <h4>This is a modal</h4>
              <p>This is modal information</p>
            </div>
            <div id="modalFooter">
              <button>Save</button>
              <button>Close</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TravelTileModal;
