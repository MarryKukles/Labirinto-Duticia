import React, { useState } from 'react';
import { Heart, Mail } from 'lucide-react';
import '../styles/EmptyScreen.css';

const EmptyScreen: React.FC = () => {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [showPhotos, setShowPhotos] = useState(false);

  const photos = [
    "https://i.postimg.cc/52mdwHnF/2beac526-afd4-4143-9d8c-3526f84e2234.jpg",
    "https://i.postimg.cc/pT3XghNL/ae2fd915-2b58-456d-972a-ee163962daa9.jpg",
    "https://i.postimg.cc/dV9RwvVY/5f01f56c-5737-469c-b620-7986216d4158.jpg",
    "https://i.postimg.cc/Y032jXGh/IMG-8641.jpg",
    "https://i.postimg.cc/vT1XZKSv/180247c9-9c75-42a6-a847-605645ec5421.jpg",
    "https://i.postimg.cc/y8H1Pw9g/IMG-1960.jpg",
    "https://i.postimg.cc/ryD5XtHG/7aa9cfe9-dffb-4f1c-a3b0-c96016fad6f7.jpg",
    "https://i.postimg.cc/j5mwdZ1H/2-FC8-AADC-5-AD1-460-C-ABE0-4-B43-FCB632-F4.jpg"
  ];

  const handleHeartClick = () => {
    setShowPhotos(true);
  };

  return (
    <div className="empty-screen">
      {!showPhotos ? (
        <div className="content">
          {!isEnvelopeOpen ? (
            <div 
              className="envelope"
              onClick={() => setIsEnvelopeOpen(true)}
            >
              <Mail size={80} color="#ff4d6d" />
              <p>Você tem um recado! Clique para abrir</p>
            </div>
          ) : (
            <div className="letter">
              <h2>Feliz dia das namoradas meu amor!</h2>
              <div className="letter-heart-container">
                <div 
                  className="letter-heart"
                  onClick={handleHeartClick}
                >
                  <Heart size={60} color="#ff4d6d" fill="#ff4d6d" />
                </div>
                <p className="click-heart">Clique no coração</p>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="photos-section">
          <div className="photos-grid">
            {photos.map((photo, index) => (
              <div key={index} className="photo-container">
                <img src={photo} alt={`Romantic moment ${index + 1}`} />
              </div>
            ))}
          </div>
          <p className="love-message">
            Mais um dia das namoradas ao seu lado, minha vida tem sido muito mais legal, 
            leve e feliz desde que você passou a fazer parte dela. 
            Você é a melhor namorada do mundo, te amo!
          </p>
          <div className="heart-alone">❤️</div>
        </div>
      )}
    </div>
  );
};

export default EmptyScreen