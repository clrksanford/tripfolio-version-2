import React from 'react';

import '../styles/alertmodal.css';
import '../styles/modal.css';

export default (props) => {
  return(
    <div>
      <div className={`${props.className} modalBackground`}
        onClick={props._closeModal}
      >
        <div id="alertContainer">
          <div id="alertHeader">
            <span id="closeModal" onClick={props._closeModal}>x</span>
          </div>
          <div id="alertContent">
            <h4>{props.modalTitle}</h4>
            <p>{props.modalMessage}</p>
          </div>
          <div id="alertFooter">
            <button className="largeButton" onClick={() => props.modalFunction()}>{props.modalButton}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
