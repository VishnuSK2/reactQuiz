import React, { useCallback, useState } from 'react'
import QUESTIONS from '../questions.js'
import Question from './Question.jsx'
import Summary from './Summary.jsx'

function Quiz() {
    const [ userAnswers, setUserAnswers] = useState([])
    
    const activeQuestion = userAnswers.length; 
    const quizIsOver = activeQuestion === QUESTIONS.length

    const handleSelectAnswer = useCallback(function handleSelectAnswer (
        selectedAnswer
        ){
        setUserAnswers((prevUserAnswers) => {
            return[...prevUserAnswers,selectedAnswer]
        });
    }, 
    []);

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer])

    if(quizIsOver){
        return <Summary userAnswers={userAnswers}/> 
    }
  return (
    <div id='quiz'>
       <Question 
       index={activeQuestion}
       key={activeQuestion}
       onSelectAnswer={handleSelectAnswer}
       onSkipAnswer={handleSkipAnswer}
       />
    </div>
  )
}

export default Quiz
