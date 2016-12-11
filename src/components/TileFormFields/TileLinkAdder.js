import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import _ from 'lodash';

class TileLinkAdder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      linkCount: 1,
      linkMax: 6,
      addLinkVisible: true
    }

    this._addLinks = this._addLinks.bind(this);
    this._removeLinks = this._removeLinks.bind(this);
  }

  _addLinks() {
    let { linkCount } = this.state;

    linkCount++;

    if(linkCount === this.state.linkMax) {
      this.setState({ addLinkVisible: false });
    } else {
      this.setState({ linkCount });
    }
  }

  _removeLinks() {
    let { linkCount } = this.state;

    this.setState({ linkCount: linkCount - 1 });
  }

  render() {
    return(
      <form id='tileLinkAdderContainer' className='tileForm' onSubmit={this.props.handleSubmit(this.props.onSubmit)}>
        {/* {_.map(this.state.linkArray, (link, i) => {
          let index = i + 1;

          return (
            <div id={`link${index}Container`} key={index}>
              <label htmlFor={`link${index}Name`}>Link Name</label>
              <Field name={`link${index}Name`} component='input' type='text' />

              <label htmlFor={`link${index}URL`}>URL</label>
              <Field name={`link${index}URL`} component='input' type='text' />
            </div>
          )
        })} */}
        <div className='formBody'>
          <h4>Helfpul Links</h4>
          {_.times(this.state.linkCount, (i) => {
            let index = i + 1;

            return (
                <div id={`link${index}Container`} key={index}>
                  <span onClick={this._removeLinks}>X</span>
                  <label htmlFor={`link${index}Name`}>Link Name</label>
                  <Field name={`link${index}Name`} component='input' type='text' />

                  <label htmlFor={`link${index}URL`}>URL</label>
                  <Field name={`link${index}URL`} component='input' type='text' />
                </div>
              )
          })}

        {/* <div id='link1Container'>
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
        </div> */}

          <a href='#' className={this.state.addLinkVisible ? '' : 'hidden'}
            onClick={(e) => {
              e.preventDefault();
              this._addLinks();
            }
          }>
            Add Link
          </a>
        </div>

        <button type='submit' className='largeButton'>Save</button>
      </form>
    );
  }
}

TileLinkAdder = reduxForm({
  form: 'tileLinks'
})(TileLinkAdder);

export default TileLinkAdder;
