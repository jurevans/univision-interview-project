import React from 'react';
import PropTypes from 'prop-types';

const Thumbnail = ({photo, handleClick}) => {

    const { title, farm, server, id, secret } = photo;

    return (
        <div
            className="thumbnail"
            onClick={() => {
                typeof(handleClick) !== 'undefined' && handleClick.call(this, id)
            }}
        >
            <img src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`} alt={title} />
            <span>
                {title.length > 30
                    ? `${title.substring(0, 30)}...`
                    : title}
            </span>
        </div>
    )
};

Thumbnail.propTypes = {
    photo: PropTypes.object,
    handleClick: PropTypes.func
};

export default Thumbnail;