import React from 'react';
import { useGame } from '../context/GameContext';
import { Key } from 'lucide-react';
import '../styles/Destination.css';

const Destination: React.FC = () => {
  const { destinationPosition, cellSize } = useGame();
  
  return (
    <div 
      className="destination"
      style={{ 
        transform: `translate(${destinationPosition.x * cellSize}px, ${destinationPosition.y * cellSize}px)`,
        width: `${cellSize}px`, 
        height: `${cellSize}px` 
      }}
    >
      <Key className="key-icon" size={cellSize * 0.7} color="#ffb703" />
    </div>
  );
};

export default Destination;