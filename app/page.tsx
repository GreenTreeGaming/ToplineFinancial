"use client";

import { useState, useEffect } from "react";
import { quizData, QuizQuestion, quizCategories } from "@/data/quiz";
import { ToplineLogo } from "@/components/ToplineLogo";

export default function Home() {
  const [started, setStarted] = useState(false);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [categoryScores, setCategoryScores] = useState<Record<string, { correct: number, total: number }>>({});
  const [selected, setSelected] = useState<string | null>(null);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (started) {
      // Initialize the quiz with weighted question selection based on categories
      const selectedQuestions: QuizQuestion[] = [];

      // Create initial category tracking
      const initialCategoryScores: Record<string, { correct: number, total: number }> = {};
      quizCategories.forEach(category => {
        initialCategoryScores[category.name] = { correct: 0, total: 0 };
      });
      setCategoryScores(initialCategoryScores);

      // Select 50 questions with weighted distribution
      const totalQuestions = 50;

      quizCategories.forEach(category => {
        const categoryQuestions = quizData.filter(q => q.category === category.name);
        const questionCount = Math.round((category.weight / 100) * totalQuestions);

        // Randomly select questions from this category
        const shuffled = [...categoryQuestions].sort(() => Math.random() - 0.5);
        selectedQuestions.push(...shuffled.slice(0, questionCount));
      });

      // Shuffle the final set of questions
      const finalQuestions = selectedQuestions.slice(0, totalQuestions).sort(() => Math.random() - 0.5);
      setQuestions(finalQuestions);
    }
  }, [started]);

  const handleAnswer = (option: string) => {
    setSelected(option);
    const currentQuestion = questions[index];
    const isCorrect = option === currentQuestion.answer;

    // Update overall score
    if (isCorrect) {
      setScore((prev) => prev + currentQuestion.points);
    }

    // Update category scores
    setCategoryScores(prev => {
      const category = currentQuestion.category;
      return {
        ...prev,
        [category]: {
          correct: isCorrect ? prev[category].correct + 1 : prev[category].correct,
          total: prev[category].total + 1
        }
      };
    });
  };

  const handleNextQuestion = () => {
    if (index + 1 < questions.length) {
      setIndex((prev) => prev + 1);
      setSelected(null);
    } else {
      setCompleted(true);
    }
  };

  const resetQuiz = () => {
    setStarted(false);
    setScore(0);
    setIndex(0);
    setSelected(null);
    setCompleted(false);
    setCategoryScores({});
  };

  const calculateReadinessScore = () => {
    // Calculate overall percentage
    const maxPossibleScore = questions.reduce((total, q) => total + q.points, 0);
    const percentage = (score / maxPossibleScore) * 100;

    // Convert to a scale of 1-10
    return Math.max(1, Math.min(10, Math.round(percentage / 10)));
  };

  const getOutcome = (readinessScore: number) => {
    if (readinessScore >= 9) return "Financial Expert";
    if (readinessScore >= 7) return "Money Savvy";
    if (readinessScore >= 5) return "Financially Aware";
    if (readinessScore >= 3) return "Financial Learner";
    return "Financial Novice";
  };

  const getOutcomeDescription = (readinessScore: number) => {
    if (readinessScore >= 9) {
      return "You have exceptional financial knowledge! You understand complex financial concepts and are well-prepared to make smart money decisions.";
    }
    if (readinessScore >= 7) {
      return "You have solid financial knowledge and skills. You're well-positioned to handle most financial challenges and make informed decisions.";
    }
    if (readinessScore >= 5) {
      return "You have a good foundation of financial knowledge. With some focused learning in key areas, you'll be ready to tackle more complex financial decisions.";
    }
    if (readinessScore >= 3) {
      return "You're on your financial journey but have some knowledge gaps to fill. Focus on core financial concepts to build your confidence.";
    }
    return "You're at the beginning of your financial literacy journey. The good news is there's nowhere to go but up! Start with basic budgeting and savings concepts.";
  };

  const getCategoryPerformance = (category: string) => {
    const categoryData = categoryScores[category];
    if (!categoryData || categoryData.total === 0) return 0;
    return Math.round((categoryData.correct / categoryData.total) * 100);
  };

  const getCategoryStrength = (percentage: number) => {
    if (percentage >= 80) return "Strength";
    if (percentage >= 60) return "Competent";
    if (percentage >= 40) return "Developing";
    return "Focus Area";
  };

  const getScoreBarColor = (readinessScore: number) => {
    if (readinessScore >= 8) return "bg-green-500";
    if (readinessScore >= 6) return "bg-blue-500";
    if (readinessScore >= 4) return "bg-yellow-500";
    return "bg-red-500";
  };

  const getCategoryBarColor = (percentage: number) => {
    if (percentage >= 80) return "bg-green-500";
    if (percentage >= 60) return "bg-blue-500";
    if (percentage >= 40) return "bg-yellow-500";
    return "bg-red-500";
  };

  const readinessScore = completed ? calculateReadinessScore() : 0;

  return (
    <main className="font-sans min-h-screen bg-gradient-to-br from-white to-gray-100 px-4 py-12 flex flex-col items-center justify-center">
      <ToplineLogo />

      {!started ? (
        <section className="text-center space-y-6 max-w-xl w-full">
          <h1 className="text-4xl sm:text-5xl font-bold text-blue-900">
            Ready to test your money smarts?
          </h1>
          <p className="text-lg text-gray-700">
            Take our comprehensive financial literacy quiz to see how prepared you are for real-world finances.
          </p>
          <button
            onClick={() => setStarted(true)}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition duration-300"
          >
            Start the Quiz
          </button>
        </section>
      ) : completed ? (
        <section className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-3xl space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-blue-900">Your Financial Readiness Score</h2>
            <div className="flex justify-center items-center my-6">
              <div className="relative w-48 h-48 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-gray-200"></div>
                <svg className="absolute" viewBox="0 0 100 100" width="100%" height="100%">
                  <circle
                    cx="50" cy="50" r="45"
                    fill="transparent"
                    stroke="#e5e7eb"
                    strokeWidth="8"
                  />
                  <circle
                    cx="50" cy="50" r="45"
                    fill="transparent"
                    stroke={readinessScore >= 8 ? "#10b981" : readinessScore >= 6 ? "#3b82f6" : readinessScore >= 4 ? "#f59e0b" : "#ef4444"}
                    strokeWidth="8"
                    strokeDasharray={`${readinessScore * 28.27} 282.7`}
                    strokeDashoffset="70.7"
                    transform="rotate(-90 50 50)"
                  />
                </svg>
                <div className="text-center">
                  <span className="text-5xl font-bold">{readinessScore}</span>
                  <span className="text-lg text-gray-500">/10</span>
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mt-2">{getOutcome(readinessScore)}</h3>
            <p className="text-gray-600 mt-2">{getOutcomeDescription(readinessScore)}</p>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Your Financial Knowledge by Category</h3>
            <div className="space-y-4">
              {quizCategories.map(category => {
                const percentage = getCategoryPerformance(category.name);
                return (
                  <div key={category.name} className="mb-2">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium text-gray-700">{category.name}</span>
                      <div className="flex items-center">
                        <span className="text-sm font-medium text-gray-500">{percentage}%</span>
                        <span className={`ml-2 px-2 py-1 text-xs rounded-full
                          ${percentage >= 80 ? 'bg-green-100 text-green-800' :
                          percentage >= 60 ? 'bg-blue-100 text-blue-800' :
                          percentage >= 40 ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'}`}>
                          {getCategoryStrength(percentage)}
                        </span>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className={`h-2.5 rounded-full ${getCategoryBarColor(percentage)}`}
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Next Steps</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              {readinessScore < 5 && <li>Focus on understanding basic budgeting and savings concepts first.</li>}
              {readinessScore < 7 && <li>Learn more about credit management and how interest works.</li>}
              {readinessScore < 9 && <li>Explore investment options and retirement planning strategies.</li>}
              <li>Review categories where you scored below 60% for targeted improvement.</li>
              <li>Consider taking a personal finance course or reading books on your weaker areas.</li>
            </ul>
          </div>

          <div className="flex justify-center mt-8">
            <button
              onClick={resetQuiz}
              className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-full font-medium transition"
            >
              Take Quiz Again
            </button>
          </div>
        </section>
      ) : questions.length === 0 ? (
        <p className="text-lg text-gray-700">Loading questions...</p>
      ) : (
        <section className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-3xl space-y-6">
          <div className="flex justify-between items-center text-sm text-gray-500">
            <span className="font-mono">
              Question {index + 1} / {questions.length}
            </span>
            <span className="text-gray-700 font-medium">
              {questions[index].category}
            </span>
            <span className="text-right font-mono">
              {Math.round(((index + 1) / questions.length) * 100)}% complete
            </span>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-1.5">
            <div
              className="h-1.5 rounded-full bg-blue-600"
              style={{ width: `${((index + 1) / questions.length) * 100}%` }}
            ></div>
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

          {selected && (
            <div className={`p-4 rounded-lg ${selected === questions[index].answer ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
              <p className={`font-medium ${selected === questions[index].answer ? 'text-green-800' : 'text-red-800'}`}>
                {selected === questions[index].answer ? 'Correct!' : 'Not quite right.'}
              </p>
              <p className="text-gray-700 mt-1">
                The correct answer is: {questions[index].answer}
              </p>

              <div className="mt-4">
                <button
                  onClick={handleNextQuestion}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium transition"
                >
                  {index + 1 < questions.length ? "Next Question" : "See Results"}
                </button>
              </div>
            </div>
          )}
        </section>
      )}
    </main>
  );
}