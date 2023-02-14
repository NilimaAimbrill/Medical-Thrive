import React, { useContext } from 'react'
import giftBox from '../../../Images/showResult.png'
import money from '../../../Images/money.png'
import tick from '../../../Images/tick.png'
import styles from './ShowResult.module.css'
import { QuizContext } from '../../../App'



function ShowResult() {
    const questionData = useContext(QuizContext)

    return (
        <div className={styles.resultMain}>
            <div className={styles.resultHead}>
                <img src={giftBox} alt="box" />
                <h3>Results of Fantasy Quiz #156</h3>
            </div>
            <div>
                <div className={styles.options}>
                    <div className={styles.optionLabelAndText}>
                        <div className={styles.moneyImg}><img src={money} alt='money' /></div>
                        <div className={styles.scores} ><b>SCORE GAINED</b></div>
                        <div className={styles.points}><b>{questionData.score}</b></div>
                    </div>
                    <div className={styles.optionLabelAndText}>
                        <div className={styles.moneyImg}><img src={tick} alt='tick' /></div>
                        <div className={styles.scores} ><b>CORRECT ANS</b></div>
                        <div className={styles.points}><b>{questionData.correctAns}</b></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowResult