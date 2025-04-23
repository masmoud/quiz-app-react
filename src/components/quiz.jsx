import { useState } from "react";
import { quizData } from "../assets/quizData";
import { Results } from "./results";

export const Quiz = () => {
  let initialAnswers = [];

  for (let i = 0; i < quizData.length; i++) {
    initialAnswers.push(null);
  }
  const [current, setCurrent] = useState(0);
  const [userAnswers, setUserAnswers] = useState(initialAnswers);

  const [isQuizFinished, setIsQuizFinished] = useState(false);

  const selectedAnswer = userAnswers[current];

  const goToNext = () => {
    if (current === quizData.length - 1) {
      setIsQuizFinished(true);
    } else {
      setCurrent(current + 1);
    }
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

  function restartQuiz() {
    setUserAnswers(initialAnswers);
    setCurrent(0);
    setIsQuizFinished(false);
  }

  if (isQuizFinished) {
    return <Results userAnswers={userAnswers} quizData={quizData} restartQuiz={restartQuiz} />;
  }

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
          Previous
        </button>
        <button onClick={goToNext} disabled={!selectedAnswer}>
          {current === quizData.length - 1 ? "Finish Quiz" : "Next"}
        </button>
      </div>
    </div>
  );
};
