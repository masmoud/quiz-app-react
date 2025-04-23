import { Quiz } from "./components/quiz";
import "./index.css";
import { QuizProvider } from "./provider/quiz-provider";

function App() {
  return (
    <QuizProvider>
      <div className="app-container">
        <h1> Quiz App </h1>

        <Quiz />
      </div>
    </QuizProvider>
  );
}

export default App;
