import { useContext } from "react";
import { QuizContext } from "../context/quiz-context";

export const Questions = () => {
  const { current, quizData, setCurrent, userAnswers, setAnswerForQuestion } =
    useContext(QuizContext);

  const questionObj = quizData[current];
  const selectedAnswer = userAnswers[current];

  const handleOptionClick = (option) => {
    setAnswerForQuestion(current, option);
  };

  const goToPrev = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  const goToNext = () => {
    if (current < quizData.length - 1) {
      setCurrent(current + 1);
    } else {
      setCurrent(current + 1);
    }
  };
  return (
    <div>
      <h2>Question {current + 1}</h2>
      <p className="question">{questionObj.question}</p>
      {questionObj.options.map((option, index) => (
        <button
          key={index}
          className={"option" + (selectedAnswer === option ? " selected" : "")}
          onClick={() => handleOptionClick(option)}>
          {option}
        </button>
      ))}
      <div className="nav-buttons">
        <button onClick={goToPrev} disabled={current === 0}>
          Previous
        </button>
        <button onClick={goToNext} disabled={!selectedAnswer}>
          {current === quizData.length - 1 ? "Finish Quiz" : "Next Question"}
        </button>
      </div>
    </div>
  );
};
