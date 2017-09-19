import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import Thumbnail from './Thumbnail';

import * as SlideshowActions from '../actions/SlideshowActions';

const mapStateToProps = function(state) {
    return {
        photos: state.flickr.searchResults
    }
};

const mapDispatchToProps = function (dispatch) {
    const boundActionCreators = bindActionCreators(SlideshowActions, dispatch);

    return {...boundActionCreators, dispatch};
};

class Slideshow extends Component {

    /* USE THUMBNAIL BELOW, then thumbnail can dispatch action to request IMAGE for the "photo" from API */
    render() {
        return (
            <div className="slideshow">
                {this.props.photos
                    ? this.props.photos.map((photo, i) => {

                        const { title, farm, server, id, secret } = photo;

                        return (
                            <div key={i}>


                                <Thumbnail
                                    photo={photo}
                                />
                            </div>
                        )
                    })
                    : null}
            </div>
        )
    }
}

Slideshow.propTypes = {
    photos: PropTypes.array
};

export default connect(mapStateToProps, mapDispatchToProps)(Slideshow);