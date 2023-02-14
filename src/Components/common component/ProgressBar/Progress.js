import React, { useContext } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './Progress.css'
import { QuizContext } from '../../../App';

function Progress() {
  const questionData = useContext(QuizContext)

  return (
    <div className='progressStyle'>
      <ProgressBar now={(questionData.currentQuestionIndex+1) / questionData.questions.length * 100} />
      <span>{`${questionData.currentQuestionIndex + 1} / ${questionData.questions.length}`}</span>
    </div>
  )
}

export default Progress;