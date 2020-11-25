import React from "react";

function Popup(props) {
  const {
    quizStarted,
    handlePopupChange,
    displayPopup,
    dataset,
    answeredCorrect,
  } = props;

  const displaying = displayPopup ? { display: "flex" } : { display: "none" };

  if (quizStarted) {
    return (
      <div style={displaying} className="popup-container">
        <div className="container">
          <div className="popup">
            <div className="popup-header">Congratulations</div>
            <p>You have completed the quiz</p>
            <p>
              {"You got: " +
                answeredCorrect +
                " out of " +
                dataset.length +
                " questions right."}
            </p>

            <button className="button" onClick={handlePopupChange}>
              Restart
            </button>
            <br />
            <br />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div style={displaying} className="popup-container">
        <div className="container">
          <div className="popup">
            <div className="popup-header">Welcome To The Quiz</div>
            <p>This is a quiz application built using ReactJS.</p>
            <p>
              Currently it's loaded with math questions, but you can easily load
              any type of questions into it.
            </p>
            <p>
              It will dynamically load the question and answers pair and upload
              them into the components.
            </p>

            <button className="button" onClick={handlePopupChange}>
              Start the quiz
            </button>
            <br />
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default Popup;
