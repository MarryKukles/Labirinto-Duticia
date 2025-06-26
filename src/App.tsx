import { useState, useEffect } from 'react';
import Game from './components/Game';
import EmptyScreen from './components/EmptyScreen';
import LoadingScreen from './components/LoadingScreen';
import { GameProvider } from './context/GameContext';
import './App.css';

function App() {
  const [gameCompleted, setGameCompleted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="app-container">
      <GameProvider>
        {!gameCompleted ? (
          <Game onGameComplete={() => setGameCompleted(true)} />
        ) : (
          <EmptyScreen />
        )}
      </GameProvider>
    </div>
  );
}

export default App;