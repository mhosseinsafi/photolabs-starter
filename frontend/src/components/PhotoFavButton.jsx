import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const [isFavorited, setIsFavorited] = useState(false);
  const handleFavClick = () => { 
    if (isFavorited) {
      setIsFavorited(false);
    } else {
      setIsFavorited(true);
    }
  };
  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg" onClick={props.onClick}>
      <FavIcon selected={props.favorites.includes(props.id)} />
      </div>
    </div>
  );
}

export default PhotoFavButton;