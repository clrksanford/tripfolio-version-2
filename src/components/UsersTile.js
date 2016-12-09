import React from 'react';

export default (props) => {
  return(
    <div className="suggestionTile" key={props.index}>
      <span
        className={props.spanClass}
        onClick={() => props._showAlertModal()}>
          x
      </span>
      <div>
        <img src={props.image}
          className='tileImage'
          alt="This will be filled by Yelp API"
          onClick={() => props._showModal(props.index)}
        />
        <h6>{props.name}</h6>
        <p>{props.term}</p>
      </div>
    </div>
  );
}
