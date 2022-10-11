import React, {createContext, useState} from 'react';
import OfficialQuiz from '../../components/OfficialQuiz';
import QuizEnding from '../../components/QuizEnding';

export const QuizContext = createContext();

const Quiz = () => {
  const [gameState, setGameState] = useState("playing");
  const [score, setScore] = useState(0);
  const [percentage, setPercentage] = useState(0);

  return (
      <QuizContext.Provider
        value={{
          gameState,
          setGameState,
          score,
          setScore,
          percentage, 
          setPercentage
        }}
      >
        {gameState === "playing" && <OfficialQuiz />}
        {gameState === "finished" && <QuizEnding />}
      </QuizContext.Provider>
  );
}

export default Quiz