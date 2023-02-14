import React,{useContext} from 'react'
import Container from 'react-bootstrap/Container';
import styles from './Header.module.css'
import logo from '../../Images/logo.png'
import cancel from '../../Images/cancel.png'
import Progress from '../common component/ProgressBar/Progress';
import { QuizContext } from '../../App';

function Header() {
  const questionData = useContext(QuizContext)
  return (
    <div className={styles.navBar}>
      <div className={styles.allThree}>
        <img className={styles.logoImage} src={logo} alt='logo' />
        <h2 className={styles.mainName}>Fantasy Quiz #156</h2>
        <img className={styles.cancelImage} src={cancel} alt='cancel' />
      </div>
      {
        questionData.screen === "QuestionScreen" ? (<div className={styles.mobileViewHide}>
          <Progress />
        </div>) : <div></div>
      }

    </div>
  )
}

export default Header