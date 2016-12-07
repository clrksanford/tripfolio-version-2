import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
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
    this._addInterval = this._addInterval.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    this._removeDay = this._removeDay.bind(this);
    this._removeInterval = this._removeInterval.bind(this);
  }

  _addDay() {
    let { dayArray } = this.state;
    dayArray.push(<Day />);

    this.setState({
      dayArray
    });
  }

  _addInterval() {

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

  _removeInterval() {

  }

  render() {
    return(
      <form onSubmit={this.props.handleSubmit(this.props.onSubmit)}>
      {/* ---DAY ONE--- */}
        <div className='day'>
          <Field name='day1value' component='input' type='text' />
          <div className='interval'>
            <span onClick={() => this._removeInterval()}>X</span>
            <label>From</label>
            <Field name='day1from1' component='input' type='text' />
            <label>To</label>
            <Field name='day1to1' component='input' type='text' />
          </div>
          <div className='interval'>
            <span onClick={() => this._removeInterval()}>X</span>
            <label>From</label>
            <Field name='day1from2' component='input' type='text' />
            <label>To</label>
            <Field name='day1to2' component='input' type='text' />
          </div>
          <div className='interval'>
            <span onClick={() => this._removeInterval()}>X</span>
            <label>From</label>
            <Field name='day1from3' component='input' type='text' />
            <label>To</label>
            <Field name='day1to3' component='input' type='text' />
          </div>
          <a href='#' onClick={(e) => {
            e.preventDefault();
            this._addInterval();
          }}>
            Add Interval
          </a>
        </div>

        {/* ---DAY TWO--- */}
        <div className='day'>
          <Field name='day2value' component='input' type='text' />
          <div className='interval'>
            <span onClick={() => this._removeInterval()}>X</span>
            <label>From</label>
            <Field name='day2from1' component='input' type='text' />
            <label>To</label>
            <Field name='day2to1' component='input' type='text' />
          </div>
          <div className='interval'>
            <span onClick={() => this._removeInterval()}>X</span>
            <label>From</label>
            <Field name='day2from2' component='input' type='text' />
            <label>To</label>
            <Field name='day2to2' component='input' type='text' />
          </div>
          <div className='interval'>
            <span onClick={() => this._removeInterval()}>X</span>
            <label>From</label>
            <Field name='day2from3' component='input' type='text' />
            <label>To</label>
            <Field name='day2to3' component='input' type='text' />
          </div>
          <a href='#' onClick={(e) => {
            e.preventDefault();
            this._addInterval();
          }}>
            Add Interval
          </a>
        </div>

        {/* ---DAY THREE--- */}
        <div className='day'>
          <Field name='day3value' component='input' type='text' />
          <div className='interval'>
            <span onClick={() => this._removeInterval()}>X</span>
            <label>From</label>
            <Field name='day3from1' component='input' type='text' />
            <label>To</label>
            <Field name='day3to1' component='input' type='text' />
          </div>
          <div className='interval'>
            <span onClick={() => this._removeInterval()}>X</span>
            <label>From</label>
            <Field name='day3from2' component='input' type='text' />
            <label>To</label>
            <Field name='day3to2' component='input' type='text' />
          </div>
          <div className='interval'>
            <span onClick={() => this._removeInterval()}>X</span>
            <label>From</label>
            <Field name='day3from3' component='input' type='text' />
            <label>To</label>
            <Field name='day3to3' component='input' type='text' />
          </div>
          <a href='#' onClick={(e) => {
            e.preventDefault();
            this._addInterval();
          }}>
            Add Interval
          </a>
        </div>

        {/* ---DAY FOUR--- */}
        <div className='day'>
          <Field name='day4value' component='input' type='text' />
          <div className='interval'>
            <span onClick={() => this._removeInterval()}>X</span>
            <label>From</label>
            <Field name='day4from1' component='input' type='text' />
            <label>To</label>
            <Field name='day4to1' component='input' type='text' />
          </div>
          <div className='interval'>
            <span onClick={() => this._removeInterval()}>X</span>
            <label>From</label>
            <Field name='day4from2' component='input' type='text' />
            <label>To</label>
            <Field name='day4to2' component='input' type='text' />
          </div>
          <div className='interval'>
            <span onClick={() => this._removeInterval()}>X</span>
            <label>From</label>
            <Field name='day4from3' component='input' type='text' />
            <label>To</label>
            <Field name='day4to3' component='input' type='text' />
          </div>
          <a href='#' onClick={(e) => {
            e.preventDefault();
            this._addInterval();
          }}>
            Add Interval
          </a>
        </div>

        {/* ---DAY FIVE--- */}
        <div className='day'>
          <Field name='day5value' component='input' type='text' />
          <div className='interval'>
            <span onClick={() => this._removeInterval()}>X</span>
            <label>From</label>
            <Field name='day5from1' component='input' type='text' />
            <label>To</label>
            <Field name='day5to1' component='input' type='text' />
          </div>
          <div className='interval'>
            <span onClick={() => this._removeInterval()}>X</span>
            <label>From</label>
            <Field name='day5from2' component='input' type='text' />
            <label>To</label>
            <Field name='day5to2' component='input' type='text' />
          </div>
          <div className='interval'>
            <span onClick={() => this._removeInterval()}>X</span>
            <label>From</label>
            <Field name='day5from3' component='input' type='text' />
            <label>To</label>
            <Field name='day5to3' component='input' type='text' />
          </div>
          <a href='#' onClick={(e) => {
            e.preventDefault();
            this._addInterval();
          }}>
            Add Interval
          </a>
        </div>

        {/* ---DAY SIX--- */}
        <div className='day'>
          <Field name='day6value' component='input' type='text' />
          <div className='interval'>
            <span onClick={() => this._removeInterval()}>X</span>
            <label>From</label>
            <Field name='day6from1' component='input' type='text' />
            <label>To</label>
            <Field name='day6to1' component='input' type='text' />
          </div>
          <div className='interval'>
            <span onClick={() => this._removeInterval()}>X</span>
            <label>From</label>
            <Field name='day6from2' component='input' type='text' />
            <label>To</label>
            <Field name='day6to2' component='input' type='text' />
          </div>
          <div className='interval'>
            <span onClick={() => this._removeInterval()}>X</span>
            <label>From</label>
            <Field name='day6from3' component='input' type='text' />
            <label>To</label>
            <Field name='day6to3' component='input' type='text' />
          </div>
          <a href='#' onClick={(e) => {
            e.preventDefault();
            this._addInterval();
          }}>
            Add Interval
          </a>
        </div>

        {/* ---DAY SEVEN--- */}
        <div className='day'>
          <Field name='day7value' component='input' type='text' />
          <div className='interval'>
            <span onClick={() => this._removeInterval()}>X</span>
            <label>From</label>
            <Field name='day7from1' component='input' type='text' />
            <label>To</label>
            <Field name='day7to1' component='input' type='text' />
          </div>
          <div className='interval'>
            <span onClick={() => this._removeInterval()}>X</span>
            <label>From</label>
            <Field name='day7from2' component='input' type='text' />
            <label>To</label>
            <Field name='day7to2' component='input' type='text' />
          </div>
          <div className='interval'>
            <span onClick={() => this._removeInterval()}>X</span>
            <label>From</label>
            <Field name='day7from3' component='input' type='text' />
            <label>To</label>
            <Field name='day7to3' component='input' type='text' />
          </div>
          <a href='#' onClick={(e) => {
            e.preventDefault();
            this._addInterval();
          }}>
            Add Interval
          </a>
        </div>
        <a href='#' onClick={(e) => {
          e.preventDefault();
          this._addDay();
        }}>
          Add day
        </a>
        <button type='submit'>Save</button>
      </form>
    );
  }
}

OpeningHours = reduxForm({
  form: 'openingHours'
})(OpeningHours);

export default OpeningHours;
