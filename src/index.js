import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import data from "./data/data";
import Popup from "./components/Popup";
import Question from "./components/Question";
import Answers from "./components/Answers";
import NextButton from "./components/NextButton";
import Footer from "./components/Footer";

function App() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [displayPopup, setDisplayPopup] = useState(true);
  const [displayNextButton, setDisplayNextButton] = useState(false);
  const [currentDataIndex, setCurrentDataIndex] = useState(0);
  const [dataset, setDataset] = useState(data);
  const [answeredCorrect, setAnsweredCorrect] = useState(0);

  const handlePopupChange = () => {
    if (!quizStarted) {
      setQuizStarted(true);
      setDisplayPopup(!displayPopup);
    } else {
      window.location.reload(); // restart the application
    }
  };

  const handleAnswerClick = (e) => {
    // Checks if answer is already chosen
    const rightClass = document.querySelector(".right");
    const wrongClass = document.querySelector(".wrong");
    if (rightClass || wrongClass) {
      return;
    }

    // handles answer clicked
    const item = e.target.closest("li");
    const value = item.value;
    const correctAnswer = dataset[currentDataIndex].answerUsingIndex;

    if (correctAnswer === value) {
      item.classList.add("right");

      setDisplayNextButton(!displayNextButton);
      setAnsweredCorrect(answeredCorrect + 1);
    } else {
      item.classList.add("wrong");

      setDisplayNextButton(!displayNextButton);
    }
  };

  const handleNextButtonClick = () => {
    // removes class of the element with one of these classes
    const rightClass = document.querySelector(".right");
    const wrongClass = document.querySelector(".wrong");
    rightClass
      ? rightClass.classList.remove("right")
      : wrongClass.classList.remove("wrong");

    // handles next button click
    const dataIndexLength = dataset.length - 1;

    if (dataIndexLength === currentDataIndex) {
      setDisplayPopup(!displayPopup);
    } else {
      setDisplayNextButton(!displayNextButton);
      setCurrentDataIndex(currentDataIndex + 1);
    }
  };

  return (
    <div className="app">
      <div className="container">
        <Popup
          quizStarted={quizStarted}
          handlePopupChange={handlePopupChange}
          displayPopup={displayPopup}
          dataset={dataset}
          answeredCorrect={answeredCorrect}
        />
        <Question dataset={dataset} currentDataIndex={currentDataIndex} />
        <Answers
          dataset={dataset}
          currentDataIndex={currentDataIndex}
          handleAnswerClick={handleAnswerClick}
        />
        <NextButton
          displayNextButton={displayNextButton}
          handleNextButtonClick={handleNextButtonClick}
          dataset={dataset}
          currentDataIndex={currentDataIndex}
        />
        <Footer />
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
