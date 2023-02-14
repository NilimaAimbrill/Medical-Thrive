import React, { useContext } from 'react'
import styles from './Question.module.css'
import Progress from '../common component/ProgressBar/Progress'
import { QuizContext } from '../../App'
import ShowResult from '../common component/ShowResult/ShowResult'
// import { BsCheckLg } from "react-icons/bs";
import DoneIcon from '@mui/icons-material/Done';

function Question() {
    const questionData = useContext(QuizContext)
    return (
        <div>
            {
                questionData.screen === "QuestionScreen" ? (
                   
                    <div className={styles.allContent}>
                            <h1 className={styles.heroHeading}>{questionData.currentQuestion.question}</h1>
                            <div className={styles.options}>
                                {questionData.questions[questionData.currentQuestionIndex].options.map((option, index) => (
                                    <div className={styles.optionLabelAndText} key={option} onClick={() => questionData.handleOptionSelect(questionData.currentQuestionIndex, option.value,option.value)}
                                        style={{
                                            backgroundColor: questionData.questions[questionData.currentQuestionIndex].selectedOption === option.value ? '#31cd63' : '#f4f3f6',
                                        }}>
                                        {
                                            questionData.questions[questionData.currentQuestionIndex].selectedOption === option.value ?
                                                <span className={styles.optionLabelIcon}><DoneIcon /></span>
                                                :
                                                <span className={styles.optionLabel}>{String.fromCharCode(65 + index)}</span>

                                        }
                                        <span className={styles.optionText}>{option.text} {questionData.questions[questionData.currentQuestionIndex].selectedOption === option.value}</span>
                                    </div>
                                ))}
                            </div>
                    </div>
                )
                    :  < ShowResult />
            }

        </div>
    )
}

export default Question