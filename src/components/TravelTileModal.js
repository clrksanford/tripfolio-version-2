// Modules
import React, { Component } from 'react';

// Styles and images
import '../styles/modal.css';
import addButton from '../../public/assets/add.png';
import exitButton from '../../public/assets/exit.png';

export default (props) => {
  if(props.selectedTile) {
    var { name } = props.selectedTile;
    var image = props.selectedTile.image || props.selectedTile['image_url'];
  } else {
    name = "Placeholder Title";
    image = "#";
  }

  return(
    <div>
      <div id="modalBackground" className={props.className} onClick={props._closeModal}>
        <div id="modalContainer">
          <img src={image} alt="Tile background of the place you selected"
            id="modalImage"/>
          <div id="modalHeader" className="clearfix">
            <img src={exitButton} alt="Close tile" id="closeModal"
              onClick={props._closeModal} />
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
              onClick={props._addTile}/>
          </div>
        </div>
      </div>
    </div>
  )
}
