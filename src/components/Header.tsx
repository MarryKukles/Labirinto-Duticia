import React from 'react';
import { Heart } from 'lucide-react';
import '../styles/Header.css';

const Header: React.FC = () => {
  return (
    <div className="game-header">
      <div className="title-container">
        <Heart className="title-heart" size={24} color="#ff4d6d" fill="#ff4d6d" />
        <h1>Labirinto do Amor</h1>
        <Heart className="title-heart" size={24} color="#ff4d6d" fill="#ff4d6d" />
      </div>
      <p className="subtitle">Chegue até mim!</p>
    </div>
  );
};

export default Header;