import React from 'react';
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

// const PhotoDetailsModal = () => {
//   return (
//     <div className="photo-details-modal">
//       <button className="photo-details-modal__close-button">
//         <img src={closeSymbol} alt="close symbol" />
//       </button>
//     </div>
//   )
// };

const PhotoDetailsModal = ({ isOpen, closeModal, photo }) => {   // pass in new prop which is photo
  console.log(photo);
  return (  // console.log photo
    <div className={`photo-details-modal ${isOpen ? 'open' : ''}`}>
      <button className="photo-details-modal__close-button" onClick={closeModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      {photo && (
        <div className="photo-details">
          <img src={photo.imageUrl} alt={photo.title} />
          <h2>{photo.title}</h2>
          <p>{photo.description}</p>
        </div>
      )}
    </div>
  );
};

export default PhotoDetailsModal;
