import React from 'react';
import '../styles/FavBadge.scss';
import FavIcon from './FavIcon';

const FavBadge = (props) => {
  //renders another React component passes props
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={props.hasLikedPhotos} selected={true} />
    </div>
  )
};

export default FavBadge;