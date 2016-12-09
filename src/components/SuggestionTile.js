import React from 'react';

export default (props) => {
  return(
    <div className="suggestionTile"
      key={props.index}
      onClick={() => props._showModal(props.index)}
    >
      <img src={props.image} alt="This will be filled by Yelp API" />
      <h6>{props.name}</h6>
    </div>
  );
}
