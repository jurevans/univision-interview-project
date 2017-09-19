import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import Thumbnail from './Thumbnail';

import Slider from 'react-slick';

import * as SlideshowActions from '../actions/SlideshowActions';

const mapStateToProps = function(state) {
    return {
        photos: state.flickr.searchResults,
        loaded: state.flickr.loaded,
        loading: state.flickr.loading,
        error: state.flickr.error
    }
};

const mapDispatchToProps = function (dispatch) {
    const boundActionCreators = bindActionCreators(SlideshowActions, dispatch);

    return {...boundActionCreators, dispatch};
};

class Slideshow extends Component {

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,

        };

        return (
            <div className="slideshow">
                {!this.props.loaded && <div>Search Flickr by entering tags</div>}
                {this.props.loading && <div>Searching...</div>}
                {this.props.photos && <Slider {...settings}>
                    {this.props.photos
                    ? this.props.photos.map((photo, i) =>
                        <div
                            className="thumbnail"
                            key={i}>
                            <Thumbnail
                                key={i}
                                photo={photo}
                            />
                        </div>
                    )
                    : null}
                </Slider>}
            </div>
        )
    }
}

Slideshow.propTypes = {
    photos: PropTypes.array,
    loaded: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Slideshow);