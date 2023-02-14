import React, { useState, useContext } from 'react'
import { Button } from 'react-bootstrap'
import Progress from '../common component/ProgressBar/Progress'
import styles from './Footer.module.css'
import { QuizContext } from '../../App'

function Footer() {

  const questionData = useContext(QuizContext)
  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div className={styles.footerMain}>
      <div className={styles.allFooter}>
        <div className={styles.mobileViewHide}>
          <Progress />
        </div>
        {
          questionData.screen !== "QuestionScreen" ? (
            <Button className={styles.okayBtn}  onClick={refreshPage}>OKAY</Button>) :
            questionData.isLastQuestion ? (
              <Button onClick={questionData.handleFinish} disabled={!questionData.questions[questionData.currentQuestionIndex].selectedOption}
                style={{
                  backgroundColor: !questionData.questions[questionData.currentQuestionIndex].selectedOption ? '#747475' : '#31CD63',
                  cursor: 'pointer',
                }}>FINISH</Button>)
              :
              <Button onClick={questionData.handleNextClick} disabled={!questionData.questions[questionData.currentQuestionIndex].selectedOption}
                style={{
                  backgroundColor: !questionData.questions[questionData.currentQuestionIndex].selectedOption ? '#747475' : '#31CD63',
                  cursor: 'pointer',
                }}>CONTINUE</Button>
        }


      </div>
    </div>
  )
}

export default Footer