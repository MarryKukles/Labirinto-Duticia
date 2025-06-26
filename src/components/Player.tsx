import React, { useEffect, useRef } from 'react';
import { useGame } from '../context/GameContext';
import { Heart } from 'lucide-react';
import '../styles/Player.css';

const Player: React.FC = () => {
  const { playerPosition, cellSize } = useGame();
  const playerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'w', 'a', 's', 'd'].includes(e.key)) {
        e.preventDefault();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.style.transition = 'transform 0.2s ease-in-out';
      playerRef.current.style.transform = 
        `translate(${playerPosition.x * cellSize}px, ${playerPosition.y * cellSize}px)`;
    }
  }, [playerPosition, cellSize]);

  return (
    <div 
      ref={playerRef} 
      className="player"
      style={{ 
        width: `${cellSize}px`, 
        height: `${cellSize}px` 
      }}
    >
      <Heart className="heart-icon" size={cellSize * 0.7} color="#ff4d6d" fill="#ff4d6d" />
    </div>
  );
};

export default Player;