import React, {useState} from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";


const PhotoList = (props) => {
console.log("propssssss", props);
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
