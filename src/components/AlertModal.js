import React from 'react';

import '../styles/alertmodal.css';
import '../styles/modal.css';

export default (props) => {
  return(
    <div>
      <div className={`${props.className} modalBackground`}>
        <div id="alertContainer">
          <div id="alertHeader">
            <span id="closeModal" onClick={props._closeModal}>x</span>
          </div>
          <div id="alertContent">
            <h4>{props.modalTitle}</h4>
            {props.modalMessage}
          </div>
          <div id="alertFooter">
            <button className="largeButton" onClick={() => props.modalFunction()}>{props.modalButton}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
