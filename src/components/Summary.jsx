import React from 'react'
import QUIZOVER from '../assets/quiz-complete.png'
import QUESTIONS from '../questions.js'
import Answers from './Answers.jsx'

function Summary({userAnswers}) {
    const skippedAnswers = userAnswers.filter(answer => answer === null)
    const correctAnswers = userAnswers.filter((answer, index) => answer === QUESTIONS[index].answers[0])

    const skippedPer = Math.round ((skippedAnswers.length/ userAnswers.length) * 100)
    const correctPer = Math.round ((correctAnswers.length/ userAnswers.length) * 100)
    const wrongPer = 100- skippedPer - correctPer
    
  return (
      <div id='summary'>
            <img src={QUIZOVER} alt='trophy' />
            <h2>Quiz Completed!</h2>
            <div id='summary-stats'>
                <p>
                    <span className='number'>{skippedPer}%</span>
                    <span className='text'>Skipped</span>
                </p>
                <p>
                    <span className='number'>{correctPer}%</span>
                    <span className='text'>Answered Correctly</span>
                </p>
                <p>
                    <span className='number'>{wrongPer}%</span>
                    <span className='text'>Answered incorrectly</span>
                </p>
            </div>
            <ol>
                {userAnswers.map((answer, index) => {
                    let cssClasses = 'user-answer'
                    if(answer === null){
                        cssClasses+=" skipped"
                    }else if (answer === QUESTIONS[index].answers[0]){
                        cssClasses += " correct"
                    }else {
                        cssClasses += " wrong"
                    }
                    return(
                        <li key={index}>
                            <h3>{index + 1}</h3>
                            <p className='question'>{QUESTIONS[index].text}</p>
                            <p className={cssClasses}>{answer ?? 'Skipped'}</p>
                        </li>
                    )
                })}
                
            </ol>
        </div>
  )
}

export default Summary
