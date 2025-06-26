import React from 'react';
import { Heart } from 'lucide-react';
import '../styles/LoadingScreen.css';

const LoadingScreen: React.FC = () => {
  return (
    <div className="loading-screen">
      <div className="loading-heart">
        <Heart size={60} color="#ff4d6d" fill="#ff4d6d" />
      </div>
      <div className="loading-text">Carregando...</div>
    </div>
  );
};

export default LoadingScreen;