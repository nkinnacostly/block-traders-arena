import React from "react";

const QuestionCard = ({ question, options, selected, handleOptionChange }) => {
  return (
    <div className="p-4 rounded-lg shadow-lg ">
      <h2 className="text-xl font-bold mb-4">{question}</h2>
      <div className="space-y-2">
        {options.map((option, index) => (
          <label
            key={index}
            className={`block p-2 border rounded-md cursor-pointer ${
              selected === option ? "border-[#D4AF37]" : "border-gray-300"
            }`}
          >
            <input
              type="radio"
              name="answer"
              value={option}
              checked={selected === option}
              onChange={() => handleOptionChange(option)}
              className="mr-2 accent-yellow-500"
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
