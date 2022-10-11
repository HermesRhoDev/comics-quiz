import React, { useContext } from 'react'
import { QuizContext } from '../../pages/Quiz'
import { Questions } from '../../utils/QuestionsObject/questionBank'

const QuizEnding = () => {
  const {score, setScore, setGameState, percentage, setPercentage} = useContext(QuizContext)
  
  const restartQuiz = () => {
    setScore(0)
    setGameState('playing')
    setPercentage(0)
  }

  const note = score <= 5 ? "Moyen" : score > 5 && score < 8 ? "Pas mal !" : score >= 8 ? "Excellent !" : null;

  return (
    <div className='w-full bg-blue-400 flex flex-col items-center gap-5 py-5'>
      <h1 className='text-white text-2xl font-semibold uppercase'>recap de vos réponses</h1>
      <p className='text-white font-medium text-lg'>{note}</p>
      <div className='w-full flex flex-row justify-center gap-5'>
        <div className='rounded-lg bg-white text-blue-400 py-2 px-5 font-medium'>Taux de réussite: {percentage}%</div>
        <div className='rounded-lg bg-white text-blue-400 py-2 px-5 font-medium'>{score} bonnes réponses sur {Questions[0].debutant.length}</div>
      </div>
      <table>
        <thead>
          <tr>
            <th>question</th>
            <th>réponse</th>
          </tr>
        </thead>
        <tbody>
          {
            Questions[0].debutant.map((element) => (
              <><td>{element.question}</td><td>{element.answer}</td></>
            ))
          }
        </tbody>
      </table>
      <button onClick={restartQuiz} className='text-white font-medium border border-white py-2 px-5 rounded-lg'>Rejouer ?</button>
    </div>
  )
}

export default QuizEnding