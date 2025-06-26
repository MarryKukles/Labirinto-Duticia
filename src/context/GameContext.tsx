import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { generateMaze } from '../utils/mazeGenerator';

interface Position {
  x: number;
  y: number;
}

interface GameContextType {
  playerPosition: Position;
  setPlayerPosition: (position: Position) => void;
  destinationPosition: Position;
  mazeGrid: number[][];
  cellSize: number;
  hasWon: boolean;
  setHasWon: (value: boolean) => void;
  handleKeyboardMove: (e: KeyboardEvent) => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};

interface GameProviderProps {
  children: ReactNode;
}

export const GameProvider: React.FC<GameProviderProps> = ({ children }) => {
  const [mazeSize] = useState({ width: 11, height: 11 });
  const [mazeGrid, setMazeGrid] = useState<number[][]>([]);
  const [playerPosition, setPlayerPosition] = useState<Position>({ x: 1, y: 1 });
  const [destinationPosition, setDestinationPosition] = useState<Position>({ x: 9, y: 9 });
  const [hasWon, setHasWon] = useState(false);
  const [cellSize, setCellSize] = useState(40);

  const handleKeyboardMove = (e: KeyboardEvent) => {
    if (hasWon) return;

    let newPos = { ...playerPosition };

    switch (e.key.toLowerCase()) {
      case 'arrowup':
      case 'w':
        newPos.y -= 1;
        break;
      case 'arrowdown':
      case 's':
        newPos.y += 1;
        break;
      case 'arrowleft':
      case 'a':
        newPos.x -= 1;
        break;
      case 'arrowright':
      case 'd':
        newPos.x += 1;
        break;
      default:
        return;
    }

    if (
      newPos.x >= 0 &&
      newPos.x < mazeSize.width &&
      newPos.y >= 0 &&
      newPos.y < mazeSize.height &&
      mazeGrid[newPos.y][newPos.x] !== 1
    ) {
      setPlayerPosition(newPos);
    }
  };

  useEffect(() => {
    const maze = generateMaze(mazeSize.width, mazeSize.height);
    setMazeGrid(maze);

    setPlayerPosition({ x: 1, y: 1 });
    setDestinationPosition({ x: mazeSize.width - 2, y: mazeSize.height - 2 });
    
    maze[1][1] = 2;
    maze[mazeSize.height - 2][mazeSize.width - 2] = 3;
  }, [mazeSize]);

  useEffect(() => {
    const updateCellSize = () => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      const padding = 40;
      
      const availableWidth = screenWidth - padding * 2;
      const availableHeight = screenHeight - padding * 2;
      
      const cellByWidth = Math.floor(availableWidth / mazeSize.width);
      const cellByHeight = Math.floor(availableHeight / mazeSize.height);
      
      const newCellSize = Math.min(cellByWidth, cellByHeight, 45);
      
      setCellSize(Math.max(newCellSize, 25));
    };

    updateCellSize();
    window.addEventListener('resize', updateCellSize);
    return () => window.removeEventListener('resize', updateCellSize);
  }, [mazeSize]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyboardMove);
    return () => window.removeEventListener('keydown', handleKeyboardMove);
  }, [playerPosition, mazeGrid, mazeSize, hasWon]);

  return (
    <GameContext.Provider value={{ 
      playerPosition,
      setPlayerPosition,
      destinationPosition, 
      mazeGrid, 
      cellSize,
      hasWon,
      setHasWon,
      handleKeyboardMove
    }}>
      {children}
    </GameContext.Provider>
  );
};