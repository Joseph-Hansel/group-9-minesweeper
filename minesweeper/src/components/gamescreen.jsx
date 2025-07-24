import { useEffect, useState } from "react";

function Game() {
  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const [isGameActive, setIsGameActive] = useState(false); 

  
  useEffect(() => {
    let timer;
    if (isGameActive) {
      timer = setInterval(() => {
        setSecondsElapsed(prev => prev + 1);
      }, 1000);
    }

   
    return () => clearInterval(timer);
  }, [isGameActive]);

 
  const startGame = () => {
    setSecondsElapsed(0);    
    setIsGameActive(true);    
    
  };

 
  const endGame = () => {
    setIsGameActive(false); 
  };

  return (
    <div>
      <div className="game-header">
        <h2>Minesweeper</h2>
        <p>⏱️ Time: {secondsElapsed}s</p>
        <button onClick={startGame}>Start Game</button>
      </div>

     
    </div>
  );
}

export default Game;

