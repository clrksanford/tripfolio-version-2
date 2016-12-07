import React from 'react';

import '../styles/alertmodal.css';

export default (props) => {
  return(
    <div>
      <div id="modalBackground" className={props.className}>
        <div id="alertContainer">
          <div id="alertHeader">
            <span id="closeModal" onClick={props._closeModal}>x</span>
          </div>
          <div id="alertContent">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
}
