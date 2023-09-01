import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  console.log("whats in PhotoFavvv", props);
  const [isFavorited, setIsFavorited] = useState(false);
  const handleFavClick = () => { 
    if (isFavorited) {
      setIsFavorited(false);
    } else {
      setIsFavorited(true);
    }
    console.log("inside handle fav click", props.id);
    props.onLikedPhoto(props.id);
  };
  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg" onClick={handleFavClick}>
      <FavIcon selected={props.favorites?.includes(props.id)} />
      </div>
    </div>
  );
}

export default PhotoFavButton;