import React, { useContext } from 'react'
import { QuizContext } from '../../pages/Quiz'
import { Questions } from '../../utils/QuestionsObject/questionBank'

const QuizEnding = () => {
  const {score, setScore,setGameState} = useContext(QuizContext)
  
  const restartQuiz = () => {
    setScore(0)
    setGameState('playing')
  }

  return (
    <div>
      <h1>SCORE</h1>
      <h2>Tu as répondu correctement à {score} questions sur {Questions[0].debutant.length}</h2>
      <button onClick={restartQuiz}>Rejouer ?</button>
    </div>
  )
}

export default QuizEnding