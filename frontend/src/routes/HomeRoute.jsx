import React, { useState } from 'react';
import '../styles/HomeRoute.scss';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import PhotoDetailsModal from './PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';


const HomeRoute = (props) => {
  const {state, openModal, closeModal, toggleFavorite, setPhoto } = useApplicationData ();

  const {favorites, modal, photo} = state;

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
