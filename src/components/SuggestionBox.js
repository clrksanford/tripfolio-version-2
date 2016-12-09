// Modules
import React, {Component} from 'react';
import _ from 'lodash';

// Components
import SuggestionTile from './SuggestionTile';

class SuggestionBox extends Component {
  constructor(props) {
    super(props);

    this._showModal = this._showModal.bind(this);
  }

  _showModal(index) {
    this.props._showModal(index)
  }

  render() {
    return(
      <div>
        <div className="tileHeader">
          <h3>Suggestions</h3>
        </div>
        <div id="suggestionContainer">
          {_.map(this.props.results, (business, index) => {
            let image = business["image_url"];
            let name = business.name;
            // let url = business.url;

            return <SuggestionTile key={index} index={index} image={image} name={name} _showModal={this._showModal} />
          })}
        </div>
      </div>
    );
  }
}

export default SuggestionBox;
