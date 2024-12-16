"use client";
import React, { useState } from "react";
import QuestionCard from "./components/QuestionCard";
import quizData from "./components/data";

function Challenges() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [showModal, setShowModal] = useState(false);

  const handleOptionChange = (option) => {
    setUserAnswers({ ...userAnswers, [currentQuestion]: option });
  };

  const handleNext = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowModal(true);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    return quizData.reduce((score, question, index) => {
      if (userAnswers[index] === question.answer) {
        return score + 1;
      }
      return score;
    }, 0);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers({});
    setShowModal(false);
  };

  return (
    <div className="min-h-screen text-white py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-center mb-4">
            {`Question ${currentQuestion + 1} of ${quizData.length}`}
          </h1>
          <QuestionCard
            question={quizData[currentQuestion].question}
            options={quizData[currentQuestion].options}
            selected={userAnswers[currentQuestion]}
            handleOptionChange={handleOptionChange}
          />
          <div className="flex justify-between mt-6">
            <button
              onClick={handlePrev}
              disabled={currentQuestion === 0}
              className={`px-6 py-2 rounded-md font-semibold ${
                currentQuestion === 0
                  ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                  : "bg-yellow-500 hover:bg-yellow-600"
              }`}
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-md"
            >
              {currentQuestion === quizData.length - 1 ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      </div>

      {/* Result Modal */}

      {/* {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center">
          <div className="bg-gray-800 text-white p-6 rounded-lg shadow-xl max-w-lg w-full space-y-4">
            <h2 className="text-2xl font-bold text-center">Your Results</h2>
            <p className="text-lg text-center">
              You scored{" "}
              <span className="text-yellow-500 font-bold">
                {calculateScore()}
              </span>{" "}
              out of {quizData.length}
            </p>
            <div className="space-y-3">
              {quizData.map((question, index) => (
                <div
                  key={index}
                  className="p-4 border rounded-md bg-gray-700 text-white"
                >
                  <p className="font-medium">Q: {question.question}</p>
                  <p>
                    <span className="font-medium">Your Answer:</span>{" "}
                    {userAnswers[index]}
                  </p>
                  <p>
                    {userAnswers[index] === question.answer ? (
                      <span className="text-green-500 font-semibold">
                        Correct ✅
                      </span>
                    ) : (
                      <span className="text-red-500 font-semibold">
                        Wrong ❌ (Correct: {question.answer})
                      </span>
                    )}
                  </p>
                </div>
              ))}
            </div>
            <button
              onClick={() => setShowModal(false)}
              className="w-full px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )} */}

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center">
          <div className="bg-gray-800 text-white p-6 rounded-lg shadow-xl max-w-sm w-full text-center">
            <h2 className="text-3xl font-bold mb-4">Your Score</h2>
            <p className="text-5xl font-extrabold text-yellow-500 mb-4">
              {calculateScore()}/{quizData.length}
            </p>
            <p className="text-lg font-medium">
              {calculateScore() === quizData.length
                ? "🌟 Excellent Work!"
                : calculateScore() >= quizData.length * 0.7
                ? "👍 Good Job!"
                : "🙁 Needs Improvement"}
            </p>
            <button
              onClick={resetQuiz}
              className="mt-6 px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Challenges;
