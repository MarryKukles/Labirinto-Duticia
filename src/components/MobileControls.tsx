import React from 'react';
import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight } from 'lucide-react';
import { useGame } from '../context/GameContext';
import '../styles/MobileControls.css';

const MobileControls: React.FC = () => {
  const { playerPosition, setPlayerPosition, mazeGrid, hasWon } = useGame();

  const handleMove = (direction: 'up' | 'down' | 'left' | 'right') => {
    if (hasWon) return;

    let newPos = { ...playerPosition };

    switch (direction) {
      case 'up':
        newPos.y -= 1;
        break;
      case 'down':
        newPos.y += 1;
        break;
      case 'left':
        newPos.x -= 1;
        break;
      case 'right':
        newPos.x += 1;
        break;
    }

    // Check if the new position is valid (not a wall)
    if (
      newPos.x >= 0 &&
      newPos.x < mazeGrid[0].length &&
      newPos.y >= 0 &&
      newPos.y < mazeGrid.length &&
      mazeGrid[newPos.y][newPos.x] !== 1
    ) {
      setPlayerPosition(newPos);
    }
  };

  return (
    <div className="mobile-controls">
      <div className="controls-grid">
        <button
          className="control-button up"
          onClick={() => handleMove('up')}
          aria-label="Move up"
        >
          <ArrowUp size={24} />
        </button>
        <button
          className="control-button left"
          onClick={() => handleMove('left')}
          aria-label="Move left"
        >
          <ArrowLeft size={24} />
        </button>
        <button
          className="control-button right"
          onClick={() => handleMove('right')}
          aria-label="Move right"
        >
          <ArrowRight size={24} />
        </button>
        <button
          className="control-button down"
          onClick={() => handleMove('down')}
          aria-label="Move down"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </div>
  );
};

export default MobileControls;