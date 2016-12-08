import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import axios from 'axios';
import _ from 'lodash';

// import Day from './Day';

class OpeningHours extends Component {
  render() {
    return(
      <form onSubmit={this.props.handleSubmit(this.props.onSubmit)}>
      {/* ---DAY ONE--- */}
        <div className='day'>
          <h3>Day 1</h3>
          <Field name='day1value' component='input' type='text'
            placeholder='e.g. "Monday - Saturday"'
          />
          <div className='interval'>
            {/* <span onClick={() => this._removeInterval()}>X</span> */}
            <label>From</label>
            <Field name='day1from1' component='input' type='text' />
            <label>To</label>
            <Field name='day1to1' component='input' type='text' />
          </div>
          <div className='interval'>
            {/* <span onClick={() => this._removeInterval()}>X</span> */}
            <label>From</label>
            <Field name='day1from2' component='input' type='text' />
            <label>To</label>
            <Field name='day1to2' component='input' type='text' />
          </div>
          <div className='interval'>
            {/* <span onClick={() => this._removeInterval()}>X</span> */}
            <label>From</label>
            <Field name='day1from3' component='input' type='text' />
            <label>To</label>
            <Field name='day1to3' component='input' type='text' />
          </div>
          {/* <a href='#' onClick={(e) => {
            e.preventDefault();
            this._addInterval();
          }}>
            Add Interval
          </a> */}
        </div>

        {/* ---DAY TWO--- */}
        <div className='day'>
          <h3>Day 2</h3>
          <Field name='day2value' component='input' type='text' />
          <div className='interval'>
            {/* <span onClick={() => this._removeInterval()}>X</span> */}
            <label>From</label>
            <Field name='day2from1' component='input' type='text' />
            <label>To</label>
            <Field name='day2to1' component='input' type='text' />
          </div>
          <div className='interval'>
            {/* <span onClick={() => this._removeInterval()}>X</span> */}
            <label>From</label>
            <Field name='day2from2' component='input' type='text' />
            <label>To</label>
            <Field name='day2to2' component='input' type='text' />
          </div>
          <div className='interval'>
            {/* <span onClick={() => this._removeInterval()}>X</span> */}
            <label>From</label>
            <Field name='day2from3' component='input' type='text' />
            <label>To</label>
            <Field name='day2to3' component='input' type='text' />
          </div>
          {/* <a href='#' onClick={(e) => {
            e.preventDefault();
            this._addInterval();
          }}>
            Add Interval
          </a> */}
        </div>

        {/* ---DAY THREE--- */}
        <div className='day'>
          <h3>Day 3</h3>
          <Field name='day3value' component='input' type='text' />
          <div className='interval'>
            {/* <span onClick={() => this._removeInterval()}>X</span> */}
            <label>From</label>
            <Field name='day3from1' component='input' type='text' />
            <label>To</label>
            <Field name='day3to1' component='input' type='text' />
          </div>
          <div className='interval'>
            {/* <span onClick={() => this._removeInterval()}>X</span> */}
            <label>From</label>
            <Field name='day3from2' component='input' type='text' />
            <label>To</label>
            <Field name='day3to2' component='input' type='text' />
          </div>
          <div className='interval'>
            {/* <span onClick={() => this._removeInterval()}>X</span> */}
            <label>From</label>
            <Field name='day3from3' component='input' type='text' />
            <label>To</label>
            <Field name='day3to3' component='input' type='text' />
          </div>
          {/* <a href='#' onClick={(e) => {
            e.preventDefault();
            this._addInterval();
          }}>
            Add Interval
          </a> */}
        </div>

        {/* ---DAY FOUR--- */}
        <div className='day'>
          <h3>Day 4</h3>
          <Field name='day4value' component='input' type='text' />
          <div className='interval'>
            {/* <span onClick={() => this._removeInterval()}>X</span> */}
            <label>From</label>
            <Field name='day4from1' component='input' type='text' />
            <label>To</label>
            <Field name='day4to1' component='input' type='text' />
          </div>
          <div className='interval'>
            {/* <span onClick={() => this._removeInterval()}>X</span> */}
            <label>From</label>
            <Field name='day4from2' component='input' type='text' />
            <label>To</label>
            <Field name='day4to2' component='input' type='text' />
          </div>
          <div className='interval'>
            {/* <span onClick={() => this._removeInterval()}>X</span> */}
            <label>From</label>
            <Field name='day4from3' component='input' type='text' />
            <label>To</label>
            <Field name='day4to3' component='input' type='text' />
          </div>
          {/* <a href='#' onClick={(e) => {
            e.preventDefault();
            this._addInterval();
          }}>
            Add Interval
          </a> */}
        </div>

        {/* ---DAY FIVE--- */}
        <div className='day'>
          <h3>Day 5</h3>
          <Field name='day5value' component='input' type='text' />
          <div className='interval'>
            {/* <span onClick={() => this._removeInterval()}>X</span> */}
            <label>From</label>
            <Field name='day5from1' component='input' type='text' />
            <label>To</label>
            <Field name='day5to1' component='input' type='text' />
          </div>
          <div className='interval'>
            {/* <span onClick={() => this._removeInterval()}>X</span> */}
            <label>From</label>
            <Field name='day5from2' component='input' type='text' />
            <label>To</label>
            <Field name='day5to2' component='input' type='text' />
          </div>
          <div className='interval'>
            {/* <span onClick={() => this._removeInterval()}>X</span> */}
            <label>From</label>
            <Field name='day5from3' component='input' type='text' />
            <label>To</label>
            <Field name='day5to3' component='input' type='text' />
          </div>
          {/* <a href='#' onClick={(e) => {
            e.preventDefault();
            this._addInterval();
          }}>
            Add Interval
          </a> */}
        </div>

        {/* ---DAY SIX--- */}
        <div className='day'>
          <h3>Day 6</h3>
          <Field name='day6value' component='input' type='text' />
          <div className='interval'>
            {/* <span onClick={() => this._removeInterval()}>X</span> */}
            <label>From</label>
            <Field name='day6from1' component='input' type='text' />
            <label>To</label>
            <Field name='day6to1' component='input' type='text' />
          </div>
          <div className='interval'>
            {/* <span onClick={() => this._removeInterval()}>X</span> */}
            <label>From</label>
            <Field name='day6from2' component='input' type='text' />
            <label>To</label>
            <Field name='day6to2' component='input' type='text' />
          </div>
          <div className='interval'>
            {/* <span onClick={() => this._removeInterval()}>X</span> */}
            <label>From</label>
            <Field name='day6from3' component='input' type='text' />
            <label>To</label>
            <Field name='day6to3' component='input' type='text' />
          </div>
          {/* <a href='#' onClick={(e) => {
            e.preventDefault();
            this._addInterval();
          }}>
            Add Interval
          </a> */}
        </div>

        {/* ---DAY SEVEN--- */}
        <div className='day'>
          <h3>Day 7</h3>
          <Field name='day7value' component='input' type='text'/>
          <div className='interval'>
            {/* <span onClick={() => this._removeInterval()}>X</span> */}
            <label>From</label>
            <Field name='day7from1' component='input' type='text' />
            <label>To</label>
            <Field name='day7to1' component='input' type='text' />
          </div>
          <div className='interval'>
            {/* <span onClick={() => this._removeInterval()}>X</span> */}
            <label>From</label>
            <Field name='day7from2' component='input' type='text' />
            <label>To</label>
            <Field name='day7to2' component='input' type='text' />
          </div>
          <div className='interval'>
            {/* <span onClick={() => this._removeInterval()}>X</span> */}
            <label>From</label>
            <Field name='day7from3' component='input' type='text' />
            <label>To</label>
            <Field name='day7to3' component='input' type='text' />
          </div>
          {/* <a href='#' onClick={(e) => {
            e.preventDefault();
            this._addInterval();
          }}>
            Add Interval
          </a> */}
        </div>
        {/* <a href='#' onClick={(e) => {
          e.preventDefault();
          this._addDay();
        }}>
          Add day
        </a> */}
        <button type='submit' className='largeButton' className='largeButton'>Save</button>
      </form>
    );
  }
}

OpeningHours = reduxForm({
  form: 'openingHours'
})(OpeningHours);

export default OpeningHours;
