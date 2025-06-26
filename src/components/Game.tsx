import { useEffect, useState } from 'react';
import { useGame } from '../context/GameContext';
import Maze from './Maze';
import Player from './Player';
import Destination from './Destination';
import VictoryOverlay from './VictoryOverlay';
import Header from './Header';
import MobileControls from './MobileControls';
import '../styles/Game.css';

interface GameProps {
  onGameComplete: () => void;
}

const Game: React.FC<GameProps> = ({ onGameComplete }) => {
  const { 
    playerPosition, 
    destinationPosition, 
    mazeGrid, 
    hasWon, 
    setHasWon 
  } = useGame();
  
  const [showVictory, setShowVictory] = useState(false);

  useEffect(() => {
    if (
      playerPosition.x === destinationPosition.x &&
      playerPosition.y === destinationPosition.y &&
      !hasWon
    ) {
      setHasWon(true);
      setShowVictory(true);
      
      setTimeout(() => {
        onGameComplete();
      }, 3000);
    }
  }, [playerPosition, destinationPosition, hasWon, setHasWon, onGameComplete]);

  return (
    <div className="game-container">
      <Header />
      <div className="game-area">
        <Maze grid={mazeGrid} />
        <Player />
        <Destination />
        {showVictory && <VictoryOverlay />}
      </div>
      <MobileControls />
    </div>
  );
};

export default Game;