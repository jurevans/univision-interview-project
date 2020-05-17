import React from 'react';
import PropTypes from 'prop-types';

const Thumbnail = ({photo, handleClick}) => {

  const { title, farm, server, id, secret } = photo;

  return (
    <img
      src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`} alt={title}
      onClick={() => {
        typeof(handleClick) !== 'undefined' && handleClick.call(this, id)
      }}
    />
  )
};

Thumbnail.propTypes = {
  photo: PropTypes.object,
  handleClick: PropTypes.func
};

export default Thumbnail;