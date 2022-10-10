import React, {useContext, useState} from 'react'
import { toast } from 'react-toastify'
import { QuizContext } from '../../pages/Quiz'
import { Questions } from '../../utils/QuestionsObject/questionBank'

const OfficialQuiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [optionChosen, setOptionChosen] = useState("")

    const { score, setScore, gameState, setGameState } = useContext(
        QuizContext
    );
  
    const nextQuestion = () => {
      if(Questions[0].debutant[currentQuestion].answer === optionChosen) {
        setScore(score + 1);
        setCurrentQuestion(currentQuestion + 1)
        toast.success('Bonne réponse !', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: "colored",
        });
      }else{
        toast.error('Mauvaise réponse', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored"
        });
      }
      toast.warning('Réponse enregistré !', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored"
      })
    }
  
    const finishQuiz = () => {
      if (Questions[0].debutant[currentQuestion].answer == optionChosen) {
        setScore(score + 1);
      }
      setGameState("finished");
      toast.success('Félicitations, vous avez réussi le quiz !', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "colored"
      });
    };
  
    let questionTitle = Questions[0].debutant[currentQuestion].question;
  
    let firstOption = Questions[0].debutant[currentQuestion].options[0];
    let secondOption = Questions[0].debutant[currentQuestion].options[1];
    let thirdOption = Questions[0].debutant[currentQuestion].options[2];
    let fourthOption = Questions[0].debutant[currentQuestion].options[3];
    
    return (
      <div className='w-full bg-blue-400 p-5'>
        <div>
          <p></p>
        </div>
        <h1 className='text-3xl text-white font-semibold mb-5'>{questionTitle}</h1>
        <div className='w-full flex flex-col items-start gap-5'>
          <button onClick={() => setOptionChosen(firstOption)} 
                  className='border border-white rounded-lg py-5 px-3 text-lg font-semibold text-white'>
                  {firstOption}
          </button>
          <button onClick={() => setOptionChosen(secondOption)} 
                  className='border border-white rounded-lg py-5 px-3 text-lg font-semibold text-white'>
                  {secondOption}
          </button>
          <button onClick={() => setOptionChosen(thirdOption)} 
                  className='border border-white rounded-lg py-5 px-3 text-lg font-semibold text-white'>
                  {thirdOption}
          </button>
          <button onClick={() => setOptionChosen(fourthOption)} 
                  className='border border-white rounded-lg py-5 px-3 text-lg font-semibold text-white'>
                  {fourthOption}
          </button>
        </div>
        <div>
        {currentQuestion == Questions[0].debutant.length - 1 ? (
          <button onClick={finishQuiz}>
            Finish Quiz
          </button>
        ) : (
          <button onClick={nextQuestion}>
            Next Question
          </button>
        )}
        </div>
      </div>
    )
  }
  
  export default OfficialQuiz