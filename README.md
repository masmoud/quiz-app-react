Sure! Here's the English version of your `README.md`:

---

# React Quiz App

A simple quiz application built with **React**, using the **Context API** to manage global state (questions, user answers, navigation, and restart functionality).

## Features

- Displays a series of multiple-choice questions
- Saves the user's selected answers
- Calculates and shows the final score at the end
- Allows restarting the quiz at any time
- Based on static quiz data

---

## Tech Stack

- **React**
- **Context API** for global state management
- **JSX**
- **CSS**

---

## Project Structure

```
src/
│
├── assets/
│   └── quizData.js         # Static quiz data (questions and answers)
│
├── components/
│   ├── questions.jsx       # Renders each question and its options
│   ├── quiz.jsx            # Renders the results or questions
│   └── results.jsx         # Shows final score and restart button
│
├── context/
│   └── quiz-context.jsx    # Creates the context via React Context
│
├── provider/
│   └── quiz-provider.jsx   # Provides the actual data and functions through the context
│
├── App.jsx                 # Main application entry point
├── index.css               # Main css file
└── main.jsx                # ReactDOM initialization
```

---

## Getting Started

Make sure you have Node.js installed, then run:

```bash
npm install
npm run dev
```

Your app should now be running on `http://localhost:5173` (or whatever port Vite assigns).

---

## Future Improvements (Optional)

- Add a timer or countdown per question
- Store user scores in local storage
- Fetch quiz data from an API instead of static file
- Add categories or difficulty levels

---
