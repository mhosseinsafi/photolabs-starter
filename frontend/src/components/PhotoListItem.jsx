import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  /* Insert React */
  const { id, location, urls, user } = props.photo;
console.log("photolistitem component");
  return (
    <div className="photo-list__item">
      <PhotoFavButton favorites={props.favorites} id={id} onLikedPhoto={props.onLikedPhoto} />
      <img className="photo-list__image" src={urls.regular} alt={`Photo by ${user.username}`} onClick={() => props.onPhotoClick(id)}  />
      <div className="photo-list__user-details" >
        <img src={urls.full} alt={`${user.username}'s profile`} className="photo-list__user-profile" />
        <div className="photo-list__user-info">
          {user.username}
          <div className="photo-list__user-location">
            <p>{location.city}, {location.country}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
