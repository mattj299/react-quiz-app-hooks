import React from "react";

function Question(props) {
  const { dataset, currentDataIndex } = props;

  return (
    <div className="question">
      <h2>
        Question {currentDataIndex + 1}/{dataset.length}
      </h2>
      <br />
      <p>{dataset[currentDataIndex].question}</p>
    </div>
  );
}

export default Question;
