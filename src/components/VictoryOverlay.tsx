import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';
import '../styles/VictoryOverlay.css';

const VictoryOverlay: React.FC = () => {
  const [hearts, setHearts] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    const generatedHearts: React.ReactNode[] = [];
    const numberOfHearts = 30;
    
    for (let i = 0; i < numberOfHearts; i++) {
      const size = Math.random() * 30 + 10;
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const animationDuration = Math.random() * 3 + 1;
      const delay = Math.random() * 0.5;
      const opacity = Math.random() * 0.8 + 0.2;
      
      generatedHearts.push(
        <div 
          key={i}
          className="victory-heart"
          style={{
            left: `${left}%`,
            top: `${top}%`,
            animationDuration: `${animationDuration}s`,
            animationDelay: `${delay}s`,
            opacity
          }}
        >
          <Heart size={size} color="#ff4d6d" fill="#ff4d6d" />
        </div>
      );
    }
    
    setHearts(generatedHearts);
  }, []);

  return (
    <div className="victory-overlay">
      <div className="victory-message">
        <h2>Boa meu amor!</h2>
      </div>
      {hearts}
    </div>
  );
};

export default VictoryOverlay;