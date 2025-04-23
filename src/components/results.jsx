import { useContext } from "react";
import { QuizContext } from "../context/quiz-context";

export const Results = () => {
  const { userAnswers, quizData, restartQuiz } = useContext(QuizContext);

  const getScore = () => {
    let finalScore = 0;
    userAnswers.forEach((answer, index) => {
      if (answer === quizData[index].answer) {
        finalScore += 1;
      }
    });
    return finalScore;
  };

  const score = getScore();

  return (
    <div>
      <h2> Quiz Completed </h2>
      <p>
        {" "}
        Your score: {score}/{quizData.length}
      </p>
      <button onClick={restartQuiz} className="restart-button">
        Restart Quiz
      </button>
    </div>
  );
};
