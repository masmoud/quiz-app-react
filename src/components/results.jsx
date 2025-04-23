/**
 * Component that displays the quiz results and calculates the user's score.
 *
 * @component
 * @param {Object} props
 * @param {string[]} props.userAnswers
 * @param {{question: string, options: string[], answer: string}[]} props.quizData
 * @param {() => void} props.restartQuiz
 * @returns {JSX.Element}
 */

export const Results = ({ userAnswers, quizData, restartQuiz }) => {
  /**
   * Calculates the user's final score by comparing their answers to the correct ones.
   *
   * @returns {number} The final score.
   */
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
