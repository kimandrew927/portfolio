import React from 'react';
import './ImageCard.css'; // Optional: for styling

const ImageCard = ({ imageUrl, altText, caption }) => {
  return (
    <div className="image-card">
      <img src={imageUrl} alt={altText} className="image-card-img" />
      {caption && <p className="image-card-caption">{caption}</p>}
    </div>
  );
};

export default ImageCard