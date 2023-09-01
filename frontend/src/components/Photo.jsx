import React from "react";
import '../styles/PhotoDetailsModal.scss'
import PhotoFavButton from "./PhotoFavButton";

// component for the image displayed in photodetails modal
const Photo = (props) => {
  console.log("props", props);
  return (
    <div>
      <div>
        <PhotoFavButton favorites={props.favorites} id={props.id} onLikedPhoto={props.onLikedPhoto} />
        <img src={props.img} alt="" className="photo-details-modal__image" />
      </div>
      <div className="photo-details-modal__photographer-details">
        <img src={props.profile} alt="" className="photo-details-modal__photographer-profile" />
        <div className="photo-details-modal__photographer-info">
          <div>{props.username}</div>
          <div className="photo-details-modal__photographer-location">
            {props.city}, {props.country}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photo;