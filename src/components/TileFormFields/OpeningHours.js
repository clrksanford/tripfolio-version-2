import React, { Component } from 'react';
import axios from 'axios';
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
    this._handleSubmit = this._handleSubmit.bind(this);
    this._removeDay = this._removeDay.bind(this);
  }

  _addDay() {
    let { dayArray } = this.state;
    dayArray.push(<Day />);

    this.setState({
      dayArray
    });
  }

  _handleSubmit() {
    let { tileId } = this.props;

    let openingHours = {
      
    }

    axios.put(`https://lit-garden-98394.herokuapp.com/travel-tiles/${tileId}`, {
      openingHours
    })
      .then((response) => {
        console.log(response);

        // Close modal
      })
      .catch(err => console.log(err))
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
      <form onSubmit={(e) => {
        e.preventDefault();
        this._handleSubmit();
      }}>
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
