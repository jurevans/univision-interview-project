import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import * as SearchActions from '../actions/SearchActions';
import * as FlickrResultsActions from '../actions/FlickrResultsActions';

const mapStateToProps = (state) => ({ text: state.search.text });

const mapDispatchToProps = (dispatch) => {
  const boundActionCreators = bindActionCreators(SearchActions, dispatch);

  return {...boundActionCreators, dispatch};
};

class Search extends Component {

  handleInput(e) {
    this.props.dispatch(SearchActions.textEntered(e.target.value));
  }

  handleClick() {
    /* Dispatch Search to get results */
    /* Maybe there should be an action for the slideshow to update here instead ??? Keep search separate */
    this.props.dispatch(FlickrResultsActions.fetchFlickrResults(this.props.text, 20)); /* 30 = num of results, could be set dynamically. Default 10 */
  }

  handleKeyPress(e){
    if (e.key === 'Enter') {
      this.props.dispatch(FlickrResultsActions.fetchFlickrResults(this.props.text, 20));
    }
  }

  render() {
    return (
      <div className="search">
        <input
          type="text"
          value={this.props.text}
          onChange={this.handleInput.bind(this)}
          onKeyPress={this.handleKeyPress.bind(this)} />
        <button
          onClick={this.handleClick.bind(this)}>Search</button>
      </div>
    )
  }
}

Search.propTypes = {
  text: PropTypes.string,
  dispatch: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);