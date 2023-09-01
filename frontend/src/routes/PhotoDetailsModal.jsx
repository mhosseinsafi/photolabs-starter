import React from 'react';
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import Photo from 'components/Photo';
import PhotoList from 'components/PhotoList';


const PhotoDetailsModal = (props) => {   // pass in new prop which is photo
  console.log('console log for propsss', props);
  const photoList = Object.values(props.photo.similar_photos);
  console.log("lets see", photoList);
  return (  
    <div className={`photo-details-modal `}>
      <div className='photo-details-modal__images'>
      <button className="photo-details-modal__close-button" onClick={props.closeModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div>  
        <Photo 
          id={props.photo.id}  
          img={props.photo.urls.regular}
          profile={props.photo.user.profile}
          username={props.photo.user.name}
          city={props.photo.location.country}
          country={props.photo.location.country}
          onLikedPhoto={props.onLikedPhoto} 
          favorites={props.favorites} />
      </div>
      <div className="photo-details-modal__header"  >
        <h3> Related Photos </h3>
      </div>
      <div className="photo-details-modal__images">
      <PhotoList
       photos={photoList} 
       onLikedPhoto={props.onLikedPhoto} favorites={props.favorites} />
      </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
