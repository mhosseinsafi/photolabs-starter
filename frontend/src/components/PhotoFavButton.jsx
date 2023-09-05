import React, { useCallback, useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {

  const [isFavorited, setIsFavorited] = useState(false);
  const handleFavClick = () => {
    //used to track whether the photo is favorited or not
    if (isFavorited) {
      setIsFavorited(false);
    } else {
      setIsFavorited(true);
    }

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