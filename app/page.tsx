"use client";

import { useState, useEffect } from "react";
import { quizData, QuizQuestion } from "@/data/quiz";
import { ToplineLogo } from "@/components/ToplineLogo";

export default function Home() {
  const [started, setStarted] = useState(false);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (started) {
      const shuffled = [...quizData].sort(() => Math.random() - 0.5);
      setQuestions(shuffled);
    }
  }, [started]);

  const handleAnswer = (option: string) => {
    setSelected(option);
    if (option === questions[index].answer) {
      setScore((prev) => prev + 1);
    }

    setTimeout(() => {
      if (index + 1 < questions.length) {
        setIndex((prev) => prev + 1);
        setSelected(null);
      } else {
        setCompleted(true);
      }
    }, 600);
  };

  const resetQuiz = () => {
    setStarted(false);
    setScore(0);
    setIndex(0);
    setSelected(null);
    setCompleted(false);
  };

  const getOutcome = (score: number) => {
    if (score >= 45) return "🌟 You're financially fearless!";
    if (score >= 30) return "👍 You're on the right track!";
    if (score >= 15) return "🛠️ You’ve got some work to do!";
    return "📘 Let’s go back to basics!";
  };

  return (
    <main className="font-sans min-h-screen bg-gradient-to-br from-white to-gray-100 px-4 py-12 flex flex-col items-center justify-center">
      <ToplineLogo />

      {!started ? (
        <section className="text-center space-y-6 max-w-xl w-full">
          <h1 className="text-4xl sm:text-5xl font-bold text-blue-900">
            Ready to test your money smarts?
          </h1>
          <p className="text-lg text-gray-700">
            Take the full 50-question quiz to see how prepared you are for real-world finances.
          </p>
          <button
            onClick={() => setStarted(true)}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition duration-300"
          >
            Start the Quiz
          </button>
        </section>
      ) : completed ? (
        <section className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-lg text-center space-y-6">
          <h2 className="text-3xl font-bold text-blue-900">Your Score: {score} / 50</h2>
          <p className="text-xl text-gray-800">{getOutcome(score)}</p>
          <button
            onClick={resetQuiz}
            className="mt-4 bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-full font-medium transition"
          >
            Try Again
          </button>
        </section>
      ) : questions.length === 0 ? (
        <p className="text-lg text-gray-700">Loading questions...</p>
      ) : (
        <section className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-3xl space-y-6">
          <div className="flex justify-between items-center text-sm text-gray-500">
            <span className="font-mono">
              Question {index + 1} / {questions.length}
            </span>
            <span className="text-right font-mono">
              {Math.round(((index + 1) / questions.length) * 100)}% complete
            </span>
          </div>

          <h3 className="text-xl font-semibold text-gray-900">
            {questions[index].question}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {questions[index].options.map((option) => {
              const isCorrect = selected && option === questions[index].answer;
              const isWrong = selected === option && option !== questions[index].answer;

              return (
                <button
                  key={option}
                  onClick={() => handleAnswer(option)}
                  disabled={!!selected}
                  className={`group px-5 py-4 rounded-xl text-left font-medium border transition-all duration-200 ease-in-out focus:outline-none focus:ring-2
                    ${
                      !selected
                        ? "hover:border-blue-700 hover:bg-blue-50 border-gray-300 bg-white"
                        : isCorrect
                        ? "border-green-600 bg-green-100 text-green-800"
                        : isWrong
                        ? "border-red-600 bg-red-100 text-red-800"
                        : "border-gray-200 bg-white text-gray-500"
                    }`}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </section>
      )}
    </main>
  );
}
