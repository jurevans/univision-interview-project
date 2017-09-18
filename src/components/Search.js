import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import * as SearchActions from '../actions/SearchActions';

const mapStateToProps = function(state) {
    return {
        text: state.search.text
    }
};

const mapDispatchToProps = function (dispatch) {
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
        this.props.dispatch(SearchActions.fetchFlickrResults(this.props.text));
    }

    render() {
        return (
            <div className="search">
                <input type="text" value={this.props.text} onChange={this.handleInput.bind(this)}/>
                <button
                    onClick={this.handleClick.bind(this)}>Search</button>

            </div>
        )
    }
}

Search.propTypes = {
    text: PropTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);