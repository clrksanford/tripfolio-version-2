import React, { Component } from 'react';
import _ from 'lodash';

import TileLink from './TileLink';

class TileLinkAdder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      linkArray: [ <TileLink /> ],
      linkMax: 10
    }

    this._addLinks = this._addLinks.bind(this);
    this._handleChange = this._handleChange.bind(this);
    this._removeLinks = this._removeLinks.bind(this);
  }

  _addLinks() {
    let { linkArray } = this.state;
    linkArray.push(<TileLink />);

    this.setState({
      linkArray
    });
  }

  _handleChange(e) {
    this.setState({
      value: e.target.value
    })

    console.log(this.state.value);
  }

  _removeLinks() {
    let { linkArray } = this.state;
    linkArray.pop();

    this.setState({
      linkArray
    });
  }

  render() {
    return(
      <div className='tileLinkAdderContainer'>
        {_.map(this.state.linkArray, (link, index) => {
          return (
            <TileLink key={index}
              _handleChange = {this._handleChange}
             />
          )
        })}

        <a href='#' onClick={(e) => {
          e.preventDefault();
          this._addLinks();
        }}>
          Add Link
        </a>
      </div>
    );
  }
}

export default TileLinkAdder;
