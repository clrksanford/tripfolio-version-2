import React, { Component } from 'react';
import _ from 'lodash';

import Day from './Day';

class OpeningHours extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dayArray: [
        <Day />
      ],
      dayMax: 8
    }

    this._addDay = this._addDay.bind(this);
    this._removeDay = this._removeDay.bind(this);
  }

  _addDay() {
    let { dayArray } = this.state;
    dayArray.push(<Day />);

    this.setState({
      dayArray
    });
  }

  _removeDay() {
    let { dayArray } = this.state;
    dayArray.pop();

    this.setState({
      dayArray
    });
  }

  render() {
    return(
      <form>
        {_.map(this.state.dayArray, (day, index) => {
          return <Day key={index} _removeDay={this._removeDay} />
        })}
        <a href='#' onClick={(e) => {
          e.preventDefault();
          this._addDay();
        }}>
          Add day
        </a>
      </form>
    );
  }
}

export default OpeningHours;
