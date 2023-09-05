import React, { useState } from 'react';
import '../styles/HomeRoute.scss';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import PhotoDetailsModal from './PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';


const HomeRoute = (props) => {
  const {state, openModal, closeModal, toggleFavorite, setPhoto, onTopicSelect } = useApplicationData ();

  const {favorites, modal, photo} = state;

  return (
    <div className="home-route"> 
      <TopNavigationBar topics={state.topicData} hasLikedPhotos={favorites.length > 0} onTopicSelect={onTopicSelect} />
      <PhotoList photos={state.photoData} onLikedPhoto={toggleFavorite} favorites={favorites} onPhotoClick={openModal} />
      {/* <PhotoDetailsModal isOpen={selectedPhotoId !== null} onClose={closeModal} /> */}
      {modal && <PhotoDetailsModal closeModal={closeModal} photo={photo} onLikedPhoto={toggleFavorite} favorites={favorites} /> }
    </div>
  );
};

export default HomeRoute;
