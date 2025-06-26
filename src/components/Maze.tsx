import React from 'react';
import { useGame } from '../context/GameContext';
import '../styles/Maze.css';

interface MazeProps {
  grid: number[][];
}

const Maze: React.FC<MazeProps> = ({ grid }) => {
  const { cellSize } = useGame();

  return (
    <div className="maze">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="maze-row">
          {row.map((cell, cellIndex) => (
            <div
              key={`${rowIndex}-${cellIndex}`}
              className={`maze-cell ${cell === 1 ? 'wall' : 'path'} ${
                cell === 2 ? 'start' : ''
              } ${cell === 3 ? 'end' : ''}`}
              style={{ width: `${cellSize}px`, height: `${cellSize}px` }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Maze;