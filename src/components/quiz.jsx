import { useContext } from "react";
import { QuizContext } from "../context/quiz-context";
import { Questions } from "./questions";
import { Results } from "./results";

export const Quiz = () => {
  const { quizData, current } = useContext(QuizContext);

  if (current >= quizData.length) {
    return <Results />;
  } else {
    return <Questions />;
  }
};
