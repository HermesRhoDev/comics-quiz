import React, {useContext, useState} from 'react'
import { toast } from 'react-toastify'
import { QuizContext } from '../../pages/Quiz'
import { Questions } from '../../utils/QuestionsObject/questionBank'
import { toastConfig } from '../../utils/ToastConfig/toastConfig';

const OfficialQuiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [optionChosen, setOptionChosen] = useState("")

    const { score, setScore, gameState, setGameState, percentage, setPercentage } = useContext(
        QuizContext
    );
  
    const nextQuestion = () => {
      if(optionChosen === "") {
        toast.error('Veuillez sélectionner une réponse !')
      }else{ 
        setCurrentQuestion(currentQuestion + 1)
        toast.warning('Réponse enregistré !', toastConfig)
      }
      if(Questions[0].debutant[currentQuestion].answer === optionChosen) {
        setScore(score + 1);
        setPercentage(percentage + 10)
        toast.success('Bonne réponse !', toastConfig);
      }
    }
  
    const finishQuiz = () => {
      if (Questions[0].debutant[currentQuestion].answer == optionChosen) {
        setScore(score + 1);
        setPercentage(percentage + 10)
      }
      setGameState("finished");
      toast.success('Félicitations, vous avez terminer le quiz !', toastConfig);
    };
  
    let questionTitle = Questions[0].debutant[currentQuestion].question;
  
    let firstOption = Questions[0].debutant[currentQuestion].options[0];
    let secondOption = Questions[0].debutant[currentQuestion].options[1];
    let thirdOption = Questions[0].debutant[currentQuestion].options[2];
    let fourthOption = Questions[0].debutant[currentQuestion].options[3];
    
    return (
      <div className='w-full bg-blue-400 p-5 flex flex-col items-center'>
        <h1 className='text-3xl text-white font-semibold mb-5'>{questionTitle}</h1>
        <div className='w-full flex flex-row justify-center gap-5 mb-5'>
          <div className='rounded-lg bg-white text-blue-400 py-2 px-5 font-medium'>Progression: {percentage}%</div>
          <div className='rounded-lg bg-white text-blue-400 py-2 px-5 font-medium'>{currentQuestion} / {Questions[0].debutant.length}</div>
        </div>
        <div className='w-full flex flex-col gap-5'>
          <div className='w-full flex flex-row gap-5 justify-center'>
            <button onClick={() => setOptionChosen(firstOption)} 
                    className='border border-white rounded-lg py-5 px-3 text-lg font-semibold text-white focus:bg-white focus:text-blue-400'>
                    {firstOption}
            </button>
            <button onClick={() => setOptionChosen(secondOption)} 
                    className='border border-white rounded-lg py-5 px-3 text-lg font-semibold text-white focus:bg-white focus:text-blue-400'>
                    {secondOption}
            </button>
          </div>
          <div className='w-full flex flex-row gap-5 justify-center'>
            <button onClick={() => setOptionChosen(thirdOption)} 
                    className='border border-white rounded-lg py-5 px-3 text-lg font-semibold text-white focus:bg-white focus:text-blue-400'>
                    {thirdOption}
            </button>
            <button onClick={() => setOptionChosen(fourthOption)} 
                    className='border border-white rounded-lg py-5 px-3 text-lg font-semibold text-white focus:bg-white focus:text-blue-400'>
                    {fourthOption}
            </button>
          </div>
        </div>
        <div className='my-5'>
          {currentQuestion == Questions[0].debutant.length - 1 ? (
            <button onClick={finishQuiz} className='text-white font-medium border border-white py-2 px-5 rounded-lg'>
              Terminer
            </button>
          ) : (
            <button onClick={nextQuestion} className='text-white font-medium border border-white py-2 px-5 rounded-lg'>
              Suivant
            </button>
          )}
        </div>
      </div>
    )
  }
  
  export default OfficialQuiz