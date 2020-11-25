import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import data from "./data/data"
import Popup from "./components/Popup"
import Question from "./components/Question"
import Answers from "./components/Answers"
import NextButton from "./components/NextButton"
import Footer from "./components/Footer"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quizStarted: false,
      displayPopup: true,
      displayNextButton: false,
      currentDataIndex: 0,
      data,
      answeredCorrect: 0
    }

    this.handlePopupChange = this.handlePopupChange.bind(this);
    this.handleAnswerClick = this.handleAnswerClick.bind(this);
    this.handleNextButtonClick = this.handleNextButtonClick.bind(this);
  }

  handlePopupChange() {

    if (!this.state.quizStarted) {
      this.setState({ 
        quizStarted: true,
        displayPopup: !this.state.displayPopup
       });
    }
    else {
      window.location.reload();// restart the application
    }
  }

  handleAnswerClick(e) {
    // Checks if answer is already chosen
    const rightClass = document.querySelector(".right");
    const wrongClass = document.querySelector(".wrong");
    if (rightClass || wrongClass) {
      return;
    }

    // handles answer clicked
    const item = e.target.closest("li");
    const value = item.value;
    const data = this.state.data;
    const currentDataIndex = this.state.currentDataIndex;
    const correctAnswer = data[currentDataIndex].answerUsingIndex;

    if (correctAnswer === value) { 
      item.classList.add("right");
      this.setState({
        displayNextButton: !this.state.displayNextButton,
        answeredCorrect: this.state.answeredCorrect + 1,
      });
    }
    else { 
      item.classList.add("wrong");
      this.setState({
        displayNextButton: !this.state.displayNextButton,
      });
    }
}

  handleNextButtonClick() {
    // removes class of the element with one of these classes
    const rightClass = document.querySelector(".right");
    const wrongClass = document.querySelector(".wrong");
    rightClass ? rightClass.classList.remove("right") : wrongClass.classList.remove("wrong")

    // handles next button click
    const dataIndexLength = this.state.data.length - 1;
    const currentDataIndex = this.state.currentDataIndex;

    if (dataIndexLength === currentDataIndex) {
      this.setState({
        displayPopup: !this.state.displayPopup,
      })
    } 
    else {
      this.setState({
        displayNextButton: !this.state.displayNextButton,
        currentDataIndex: this.state.currentDataIndex + 1
      })
    }
  }

  render() {
    return (
      <div className="app">
        <div className="container">
          <Popup 
          quizStarted={this.state.quizStarted} 
          handlePopupChange={this.handlePopupChange} 
          displayPopup={this.state.displayPopup} 
          dataset={this.state.data} 
          answeredCorrect={this.state.answeredCorrect}
          />
          <Question 
          dataset={this.state.data} 
          currentDataIndex={this.state.currentDataIndex} 
          />
          <Answers 
          dataset={this.state.data} 
          currentDataIndex={this.state.currentDataIndex} 
          handleAnswerClick={this.handleAnswerClick}
          />
          <NextButton
          displayNextButton={this.state.displayNextButton}
          handleNextButtonClick={this.handleNextButtonClick}
          dataset={this.state.data}
          currentDataIndex={this.state.currentDataIndex}
          />
          <Footer />
        </div>
      </div>
    );
  }
}

ReactDOM.render( <App />, document.getElementById('root') );