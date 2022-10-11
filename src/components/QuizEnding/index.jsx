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
      <div class="flex flex-col">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full border text-center">
          <thead class="border-b">
            <tr>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 border-r">
                Question
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 border-r">
                Réponse
              </th>
            </tr>
          </thead>
          <tbody>
            {
            Questions[0].debutant.map((element) => (
              <>
                <tr class="bg-white border-b">
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">
                    {element.question}
                  </td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                    {element.answer}
                  </td>
                </tr>
              </>
            ))
          }
            
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
      <button onClick={restartQuiz} className='text-white font-medium border border-white py-2 px-5 rounded-lg'>Rejouer ?</button>
    </div>
  )
}

export default QuizEnding