import React, { useState } from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

//rendering a list of photos represented by PhotoListItem components
const PhotoList = (props) => {

  return (
    <ul className="photo-list">
      {props.photos.map((photo) => (
        <PhotoListItem key={photo.id} photo={photo} onLikedPhoto={props.onLikedPhoto}
          favorites={props.favorites} onPhotoClick={props.onPhotoClick} />
      ))}
    </ul>
  );
};

export default PhotoList;
