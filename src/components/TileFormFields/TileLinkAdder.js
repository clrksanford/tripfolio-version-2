import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import _ from 'lodash';

class TileLinkAdder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      linkArray: [ 'link' ],
      linkMax: 10
    }

    this._addLinks = this._addLinks.bind(this);
    this._handleChange = this._handleChange.bind(this);
    this._removeLinks = this._removeLinks.bind(this);
  }

  _addLinks() {
    let { linkArray } = this.state;
    linkArray.push('link');

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
      <form id='tileLinkAdderContainer' onSubmit={this.props.handleSubmit(this.props.onSubmit)}>
        {/* {_.map(this.state.linkArray, (link, index) => {
          return (
            <TileLink key={index}
              _handleChange = {this._handleChange}
             />
          )
        })} */}

        <div id='link1Container'>
          <label htmlFor='link1Name'>Link Name</label>
          <Field name='link1Name' component='input' type='text' />

          <label htmlFor='link1URL'>URL</label>
          <Field name='link1URL' component='input' type='text' />
        </div>
        <div id='link2Container'>
          <label htmlFor='link2Name'>Link Name</label>
          <Field name='link2Name' component='input' type='text' />

          <label htmlFor='link2URL'>URL</label>
          <Field name='link2URL' component='input' type='text' />
        </div>
        <div id='link3Container'>
          <label htmlFor='link3Name'>Link Name</label>
          <Field name='link3Name' component='input' type='text' />

          <label htmlFor='link3URL'>URL</label>
          <Field name='link3URL' component='input' type='text' />
        </div>

        <button type='submit'>Save</button>

        <a href='#' onClick={(e) => {
          e.preventDefault();
          // this._addLinks();
        }}>
          Add Link
        </a>
      </form>
    );
  }
}

TileLinkAdder = reduxForm({
  form: 'tileLinks'
})(TileLinkAdder);

export default TileLinkAdder;
