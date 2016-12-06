import React, { Component } from 'react';
import _ from 'lodash';

import Interval from './Interval';

class Day extends Component {
  constructor(props) {
    super(props);

    this.state = {
      intervalArray: [
        <Interval />
      ],
      intervalMax: 3
    }

    this._addInterval = this._addInterval.bind(this);
    this._removeInterval = this._removeInterval.bind(this);
  }

  _addInterval() {
    let { intervalArray } = this.state;
    intervalArray.push(<Interval />);

    this.setState({
      intervalArray
    });
  }

  _removeInterval() {
    let { intervalArray } = this.state;
    intervalArray.pop();

    this.setState({
      intervalArray
    });
  }

  render() {
    let addInterval;

    if(this.state.intervalArray.length === this.state.intervalMax) {
      addInterval = '';
    } else {
      addInterval = <a href='#' onClick={(e) => {
        e.preventDefault();
        this._addInterval();
      }}>
        Add interval
      </a>;
    }

    return(
      <div className='dayContainer'>
        <span onClick={this.props._removeDay}>X</span>
        <input type='text' placeholder='Day(s)' />
        {_.map(this.state.intervalArray, (interval, index) => {
          return <Interval key={index} _removeInterval={this._removeInterval} />
        })}
        {addInterval}
        <input type='checkbox'/> <label>Mark closed</label>
      </div>
    )
  }
}

export default Day;
