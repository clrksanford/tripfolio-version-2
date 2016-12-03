import React, {Component} from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

import getTripsByDestination from '../actions/getTripsByDestination';

class SearchBar extends Component {
  // constructor(props) {
  //   super(props);
  //
  //   this._handleSubmit = this._handleSubmit.bind(this);
  // }
  //
  // _handleSubmit(e) {
  //   e.preventDefault();
  //
  //   this.props._handleSubmit(this.refs.search.value);
  // }

  render() {
    return(
      <form onSubmit={(e) => {
        e.preventDefault();
        let query = this.refs.search.value;

        this.props.setTripsByDestination(query);
      }}>
        <input id="newTripSubmit" type="text" ref="search" placeholder="Enter City Here"/>
        <input className="largeButton" type="submit" value="Go!" />
      </form>
    );
  }
}

var mapDispatchToProps = (dispatch) => {
  return {
    setTripsByDestination: (cityName) => dispatch(getTripsByDestination(cityName))
  }
}

SearchBar = connect(null, mapDispatchToProps)(SearchBar);

export default SearchBar;
