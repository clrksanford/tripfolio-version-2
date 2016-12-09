import React from 'react';

import '../styles/modal.css';

export default (props) => {
  return(
    <div className={`${props.className} modalBackground`}>
      <div id='tileModalContainer'>
        <div className='clearfix modalHeader'>
          <span id="closeModal" onClick={props._closeModal}>x</span>
        </div>
          {props.children}
        <div className='row'>
          {props.modalButton}
        </div>
      </div>
    </div>
  );
}
