import { useState } from "react";
import { quizData } from "../assets/quizData";

export const Quiz = () => {
  let initialAnswers = [];

  for (let i = 0; i < 200; i++) {
    initialAnswers.push(null);
  }
  const [current, setCurrent] = useState(0);
  const [userAnswers, setUserAnswers] = useState(initialAnswers);

  const selectedAnswer = userAnswers[current];

  const goToNext = () => {
    setCurrent(current + 1);
  };

  const goToPrev = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  const handleSelectOption = (option) => {
    const newUserAnswers = [...userAnswers];
    newUserAnswers[current] = option;
    setUserAnswers(newUserAnswers);
  };

  return (
    <div>
      <h2>Question {current + 1} </h2>
      <p className="question">{quizData[current].question}</p>

      {quizData[current].options.map((opt) => (
        <button
          key={opt}
          onClick={() => handleSelectOption(opt)}
          className={`option ${selectedAnswer === opt ? "selected" : ""}`}>
          {opt}
        </button>
      ))}

      <div className="nav-buttons">
        <button onClick={goToPrev} disabled={current === 0}>
          Prev
        </button>
        <button onClick={goToNext} disabled={current === quizData.length - 1 || !selectedAnswer}>
          Next
        </button>
      </div>
    </div>
  );
};
