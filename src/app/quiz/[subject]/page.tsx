"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

// Mock Quiz Data
const quizData = {
  math: [
    { question: "What is 2 + 2?", options: ["3", "4", "5", "6"], correctAnswer: "4" },
    { question: "What is 3 * 3?", options: ["6", "7", "9", "10"], correctAnswer: "9" },
  ],
  science: [
    { question: "What planet is closest to the Sun?", options: ["Earth", "Venus", "Mercury", "Mars"], correctAnswer: "Mercury" },
    { question: "What is the chemical symbol for water?", options: ["O", "H2O", "CO2", "NaCl"], correctAnswer: "H2O" },
  ],
  history: [
    { question: "Who was the first President of the USA?", options: ["George Washington", "John Adams", "Abraham Lincoln", "Thomas Jefferson"], correctAnswer: "George Washington" },
    { question: "In which year did World War II end?", options: ["1941", "1945", "1950", "1939"], correctAnswer: "1945" },
  ],
};

export default function QuizPage() {
  const { subject } = useParams();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [timer, setTimer] = useState(30); // 30 seconds timer
  const [profile, setProfile] = useState<any>(null); // State to hold profile data
  const [isLoadingProfile, setIsLoadingProfile] = useState(true); // To handle loading state

  const questions = quizData[subject as keyof typeof quizData];

  if (!questions) {
    return <div>Invalid subject</div>;
  }

  // Timer logic
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer(timer - 1), 1000);
      return () => clearInterval(interval);
    } else {
      handleNextQuestion(); // Automatically move to the next question when the timer runs out
    }
  }, [timer]);

  // Fetch profile data from backend
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch("/profile"); // Replace with your actual API endpoint
        const data = await response.json();
        setProfile(data);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      } finally {
        setIsLoadingProfile(false);
      }
    };

    fetchProfile();
  }, []);

  const handleAnswerSelection = (option: string) => {
    setSelectedAnswer(option);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setTimer(30); // Reset timer for the next question
    } else {
      setShowResult(true);
    }
    setSelectedAnswer("");
  };

  return (
    <div className="flex flex-row min-h-screen">
      {/* Main Quiz Content */}
      <div className="flex flex-col items-center justify-center w-2/3">
        {showResult ? (
          <div>
            <h1 className="text-3xl">Your Score: {score}/{questions.length}</h1>
            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => setShowResult(false)} // Reset to retake quiz (optional)
            >
              Retake Quiz
            </button>
          </div>
        ) : (
          <div className="w-full max-w-lg">
            <div className="flex justify-between items-center w-full mb-4">
              {/* Timer and Question Number */}
              <div className="text-lg font-bold">
                Question {currentQuestion + 1} / {questions.length}
              </div>
              <div className="text-lg font-bold text-red-500">Time: {timer}s</div>
            </div>

            <h1 className="text-xl mb-4">{questions[currentQuestion].question}</h1>
            <div className="flex flex-col space-y-4">
              {questions[currentQuestion].options.map((option: string) => (
                <button
                  key={option}
                  className={`px-4 py-2 rounded ${
                    selectedAnswer === option ? "bg-blue-500 text-white" : "bg-gray-200"
                  }`}
                  onClick={() => handleAnswerSelection(option)}
                >
                  {option}
                </button>
              ))}
            </div>
            <button
              className="mt-6 bg-green-500 text-white px-4 py-2 rounded"
              onClick={handleNextQuestion}
            >
              {currentQuestion + 1 === questions.length ? "Submit" : "Next Question"}
            </button>
          </div>
        )}
      </div>

      {/* Profile Section */}
      <div className="w-1/3 bg-gray-100 p-4">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Profile</h2>
          {isLoadingProfile ? (
            <p>Loading profile...</p>
          ) : profile ? (
            <>
              <p className="text-lg mb-2">Name: {profile.name}</p>
              <p className="text-lg mb-2">Email: {profile.email}</p>
              <p className="text-lg mb-2">Total Quizzes Taken: {profile.totalQuizzes}</p>
              <p className="text-lg">Average Score: {profile.averageScore}%</p>
            </>
          ) : (
            <p>Error loading profile</p>
          )}
        </div>
      </div>
    </div>
  );
}
