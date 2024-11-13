import React, { useEffect, useState } from 'react'

function QuestionTimer({ timeout, onTimeOut, mode }) {
    const [remainingTime, setReaminingTime] = useState(timeout);

    useEffect(() => {
        const timer = setTimeout(onTimeOut,timeout)
        return () => {
            clearInterval(timer)
        }
    },[timeout,onTimeOut])

    useEffect(() => {
        const interval = setInterval(() => {
            setReaminingTime((prevRemainigTime) => prevRemainigTime - 100)
        },100);
        return () => {
            clearInterval(interval)
        }
    },[])
 
  return (
    <progress 
    id='question-time' 
    max={timeout} 
    value={remainingTime} 
    className={mode}
    />
  )
}

export default QuestionTimer
