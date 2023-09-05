import { useReducer } from 'react';
import { useEffect } from "react";

//to hold action type constants.These constants are used to dispatch actions in the reducer.
export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
};

//handles state updates based on dispatched actions
function reducer(state, action) {
  switch (action.type) {
    case 'FAV_PHOTO_ADDED':
      return {
        ...state, favorites: [...state.favorites, action.value]
      }
    case 'FAV_PHOTO_REMOVED':
      return {
        ...state, favorites: [...action.value]
      }
    case 'SET_PHOTO_DATA':
      return {
        ...state, photoData: action.payload
      }
    case 'DISPLAY_PHOTO_DETAILS':
      return {
        ...state, photo: action.value.photo, modal: action.value.modal, selectedPhotoId: action.value.selectedPhotoId
      }
    case 'SET_TOPIC_DATA':
      return {
        ...state, topicData: action.payload
      }

    default:
      throw new Error(`Tried to reduce with unsupported action type: ${action.type}`);
  }
};

//initializes the state using useReducer and sets up several functions to interact with the state
export default function useApplicationData() {

  const [state, dispatch] = useReducer(reducer, {
    favorites: [],
    modal: false,
    selectedPhotoId: null,
    photo: null,
    photoData: [],
    topicData: [],
  });

  //fetches photo data associated with a selected topic when called
  const onTopicSelect = (id) => {

    fetch('http://localhost:8001/api/topics/photos/' + id)
      .then(res => res.json())
      .then(data => {
        dispatch({
          type: ACTIONS.SET_PHOTO_DATA,
          payload: data,
        })
      })
  };

  //hooks are used to fetch initial data when the component using this hook mounts
  useEffect(() => {
    fetch('http://localhost:8001/api/photos')
      .then(res => res.json())
      .then(data => {
        dispatch({
          type: ACTIONS.SET_PHOTO_DATA,
          payload: data,
        })
      })
  }, [])

  useEffect(() => {
    fetch('http://localhost:8001/api/topics')
      .then(res => res.json())
      .then(data => {
        dispatch({
          type: ACTIONS.SET_TOPIC_DATA,
          payload: data,
        })
      })
  }, [])

  //toggles the favorite status of a photo by adding or removing its ID from the favorites array in the state.
  const toggleFavorite = (photoId) => {
    const indexOfPhoto = state.favorites.indexOf(photoId);
    if (indexOfPhoto === -1) {
      dispatch({
        type: ACTIONS.FAV_PHOTO_ADDED,
        value: photoId,
      })
    } else {
      dispatch({
        type: ACTIONS.FAV_PHOTO_REMOVED,
        value: state.favorites.filter(favoriteId => favoriteId !== photoId),
      })
    }
  };


  const openModal = (photoId, photo) => {
    dispatch({
      type: ACTIONS.DISPLAY_PHOTO_DETAILS,
      value: {
        modal: true,
        selectedPhotoId: photoId,
        photo,
      },
    });
  };

  const closeModal = () => {
    dispatch({
      type: ACTIONS.DISPLAY_PHOTO_DETAILS,
      value: {
        modal: false,
        photo: null,
        selectedPhotoId: null,
      },
    });
  };


  const setPhoto = (photo) => {
    dispatch({
      type: ACTIONS.SET_PHOTO_DATA,
      value: {
        photo,
      },
    });
  };

  return {
    state,
    toggleFavorite,
    openModal,
    closeModal,
    setPhoto,
    onTopicSelect,
  };
};

