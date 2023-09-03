import { useState } from 'react';


export default function useApplicationData() {

  const [state, setState] = useState({
    favorites: [],
    modal: false,
    selectedPhotoId: null,
    photo: null,
  });

  const toggleFavorite = (photoId) => {

    const indexOfPhoto = state.favorites.indexOf(photoId);
    if (indexOfPhoto === -1) {
      setState((prev) => ({
        ...prev,
        favorites: prev.favorites.concat(photoId),
      }))
    } else {
      setState((prev) => ({
        ...prev,
        favorites: prev.favorites.filter((favoriteId) => favoriteId !== photoId),
      }))
    }
  };

  const openModal = (photoId, photo) => {

    setState((prev) => ({
      ...prev,
      selectedPhotoId: photoId,
      modal: true,
      photo,
    }))
  };

  const closeModal = () => {
    setState((prev) => ({
      ...prev,
      modal: false,
      photo: null,
    }))
  };

  const setPhoto = (photo) => {
    setState((prev) => ({
      ...prev,
      photo,
    }))
  };

  return {
    state,
    toggleFavorite,
    openModal,
    closeModal,
    setPhoto,
  };
};

