import React, { useState } from 'react';
import '../styles/HomeRoute.scss';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import PhotoDetailsModal from './PhotoDetailsModal';


const HomeRoute = (props) => {
   const [favorites, setFavorites] = useState([]);
   const [modal, setModal] = useState(false);
   const [selectedPhotoId, setSelectedPhotoId] = useState(null);
   //start hereeee
   const [photo, setPhoto] = useState(null); // State to hold the selected photo details

   const toggleFavorite = (photoId) => {

  const indexOfPhoto = favorites.indexOf(photoId);
  if (indexOfPhoto === -1) {
    setFavorites(favorites.concat(photoId))
  } else {
    setFavorites(favorites.filter((favoriteId) => favoriteId !== photoId ))
  }
   };
   //modal
  //  let photo = null;
   // if selected photo id is not null,           
   // take photos , loop and return the matching id , then set that to photo, wont work unless we have a selected photo id.
   const openModal = (photoId) => {
    setSelectedPhotoId(photoId); // set photo id TO selected photo id 
    setModal(true);
  

  // Find the selected photo based on photoId
  const selectedPhoto = props.photos.find((photo) => photo.id === photoId);
  if (selectedPhoto) {
    setPhoto(selectedPhoto); // Set the selected photo details
    console.log("whats going on", selectedPhoto);
  }
};

  const closeModal = () => {
    setModal(false);
    setPhoto(null); // Clear the selected photo details when closing the modal
  };
  console.log(props.photos);
  console.log(selectedPhotoId);
  return (
    <div className="home-route"> 
      <TopNavigationBar topics={props.topics} hasLikedPhotos={favorites.length > 0} />
      <PhotoList photos={props.photos} onLikedPhoto={toggleFavorite} favorites={favorites} onPhotoClick={openModal} />
      {/* <PhotoDetailsModal isOpen={selectedPhotoId !== null} onClose={closeModal} /> */}
      {modal && <PhotoDetailsModal closeModal={closeModal} photo={photo} onLikedPhoto={toggleFavorite} favorites={favorites} /> }
    </div>
  );
};

export default HomeRoute;
