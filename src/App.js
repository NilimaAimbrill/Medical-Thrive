import React, { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header'
import Question from './Components/Questions/Question';
import Footer from './Components/Footer/Footer';
import ShowResult from "./Components/common component/ShowResult/ShowResult";

export const QuizContext = createContext();




function App() {

  const [questions, setQuestions] = useState([
    {
      question: "PREDICT THE TOP LOSER (for tomorrow) across these indices",
      options: [
        { value: 'A', text: 'NIFTY50' },
        { value: 'B', text: 'NIFTYNEXT50' },
        { value: 'C', text: 'NIFTYBANK' },
      ]
      , selectedOption: '',correctAns: 'B'
    },
    {
      question: "Which of this is not a javascript framework?",
      options: [
        { value: 'A', text: 'React' },
        { value: 'B', text: 'Angular' },
        { value: 'C', text: 'Java' },
      ]
      , selectedOption: '',correctAns: 'C'
    },
    {
      question: "Which of this is not a programming language?",
      options: [
        { value: 'A', text: 'Python' },
        { value: 'B', text: 'JavaScript' },
        { value: 'C', text: 'MC-03' },
      ]
      , selectedOption: '',correctAns: 'C'
    },
    {
      question: "What is the capital of America?",
      options: [
        { value: 'A', text: 'New York City' },
        { value: 'B', text: 'Washington DC' },
        { value: 'C', text: 'Santa Fe' },
      ]
      , selectedOption: '',correctAns: 'B'
    },
    {
      question: "Who is the prime minister of India",
      options: [
        { value: 'A', text: 'Modi' },
        { value: 'B', text: 'Amit Shah' },
        { value: 'C', text: 'Yogi' },
      ]
      , selectedOption: '',correctAns: 'A'
    },
  ]);

  // console.log("questions", questions.correctAns)

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const currentQuestion = questions[currentQuestionIndex];
  const options = currentQuestion.options;
  const [screen, setScreen] = useState("QuestionScreen")
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const [selectedOption, setSelectedOption] = useState(null);
  const [correctAns,setCorrectAns] = useState(0)
  const [score, setScore] = useState(0);

  const handleNextClick = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handleOptionSelect = (questionIndex, selectedOption) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].selectedOption = selectedOption;
    setQuestions(updatedQuestions);
    if (selectedOption === questions[currentQuestionIndex].correctAns ) {
      setScore(score + 5)
      setCorrectAns(correctAns+1)
      console.log("right answer",correctAns)
      console.log("score",score)
    }
  };
  const handleFinish = () => {
    setScreen("ResultScreen")
  }
  return (
    <div className='App'>
      <QuizContext.Provider value={{ currentQuestionIndex, setCurrentQuestionIndex, currentQuestion, options, handleNextClick, isLastQuestion, selectedOption, questions, handleOptionSelect, screen, setScreen, handleFinish,score,setScore,correctAns,setCorrectAns }}>
        <Header />
        <Question />
        <Footer />
      </QuizContext.Provider>
    </div>
  );
}

export default App;
