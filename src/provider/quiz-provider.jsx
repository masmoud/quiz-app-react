import { useState } from "react";
import { quizData } from "../assets/quizData";
import { QuizContext } from "../context/quiz-context";

export const QuizProvider = ({ children }) => {
  const initialAnswers = quizData.map(() => null);
  const [current, setCurrent] = useState(0);
  const [userAnswers, setUserAnswers] = useState(initialAnswers);

  const setAnswerForQuestion = (index, answer) => {
    setUserAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[index] = answer;
      return newAnswers;
    });
  };

  const restartQuiz = () => {
    setCurrent(0);
    setUserAnswers(quizData.map(() => null));
  };

  return (
    <QuizContext.Provider
      value={{
        quizData,
        current,
        setCurrent,
        userAnswers,
        setAnswerForQuestion,
        restartQuiz,
      }}>
      {children}
    </QuizContext.Provider>
  );
};
