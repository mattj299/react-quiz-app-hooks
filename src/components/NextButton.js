import React from "react";

function NextButton({
  displayNextButton,
  handleNextButtonClick,
  dataset,
  currentDataIndex,
}) {
  const displaying = displayNextButton
    ? { display: "flex" }
    : { display: "none" };

  return (
    <div className="next-button-container">
      <button
        style={displaying}
        className="button"
        onClick={handleNextButtonClick}
      >
        {dataset.length - 1 === currentDataIndex
          ? "Finish the quiz"
          : "Next Question"}
      </button>
    </div>
  );
}

export default NextButton;
