import React, { useState } from "react";

export default function Quiz() {
  const [page, setPage] = useState("home");
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);

  const questions = [
    // Science
    { section: "Science", question: "What is the chemical symbol of water?", options: ["O2","H2O","CO2","NaCl"], answer: "H2O" },
    { section: "Science", question: "Which planet is known as the Red Planet?", options: ["Mars","Venus","Jupiter","Saturn"], answer: "Mars" },
    { section: "Science", question: "The process of converting solid directly to gas is called?", options: ["Sublimation","Evaporation","Condensation","Fusion"], answer: "Sublimation" },
    { section: "Science", question: "What gas do plants absorb from the atmosphere?", options: ["Oxygen","Nitrogen","Carbon Dioxide","Hydrogen"], answer: "Carbon Dioxide" },
    { section: "Science", question: "Which vitamin is produced when sunlight hits our skin?", options: ["Vitamin A","Vitamin B","Vitamin C","Vitamin D"], answer: "Vitamin D" },

    // Math
    { section: "Math", question: "What is 12 × 8?", options: ["96","88","108","100"], answer: "96" },
    { section: "Math", question: "Square root of 144 is?", options: ["10","11","12","13"], answer: "12" },
    { section: "Math", question: "What is 15% of 200?", options: ["25","30","35","40"], answer: "30" },
    { section: "Math", question: "If x + 5 = 12, what is x?", options: ["5","6","7","8"], answer: "7" },
    { section: "Math", question: "The value of π approximately is?", options: ["2.14","3.14","3.41","2.41"], answer: "3.14" },

    // Art
    { section: "Art", question: "Who painted the Mona Lisa?", options: ["Van Gogh","Picasso","Leonardo da Vinci","Michelangelo"], answer: "Leonardo da Vinci" },
    { section: "Art", question: "The Starry Night is painted by?", options: ["Monet","Van Gogh","Rembrandt","Salvador Dalí"], answer: "Van Gogh" },
    { section: "Art", question: "Which art movement is Picasso known for?", options: ["Cubism","Impressionism","Baroque","Realism"], answer: "Cubism" },
    { section: "Art", question: "The Scream is painted by?", options: ["Munch","Picasso","Da Vinci","Van Gogh"], answer: "Munch" },
    { section: "Art", question: "Which is a famous Italian Renaissance artist?", options: ["Leonardo da Vinci","Monet","Matisse","Dali"], answer: "Leonardo da Vinci" },

    // Commerce
    { section: "Commerce", question: "GDP stands for?", options: ["Gross Domestic Product","General Domestic Price","Global Demand Process","Gross Data Profit"], answer: "Gross Domestic Product" },
    { section: "Commerce", question: "Which is NOT a type of business organization?", options: ["Sole Proprietorship","Partnership","Corporation","Triangle"], answer: "Triangle" },
    { section: "Commerce", question: "What is the currency of Japan?", options: ["Yen","Dollar","Euro","Rupee"], answer: "Yen" },
    { section: "Commerce", question: "Inflation refers to?", options: ["Increase in prices","Decrease in prices","Stable prices","Currency exchange"], answer: "Increase in prices" },
    { section: "Commerce", question: "Which financial institution regulates banks in India?", options: ["RBI","IMF","World Bank","SEBI"], answer: "RBI" },

    // General Knowledge
    { section: "GK", question: "Who is known as the Father of the Nation (India)?", options: ["Mahatma Gandhi","Nehru","Subhash Chandra Bose","Ambedkar"], answer: "Mahatma Gandhi" },
    { section: "GK", question: "What is the capital of Japan?", options: ["Beijing","Tokyo","Seoul","Bangkok"], answer: "Tokyo" },
    { section: "GK", question: "Which is the largest ocean on Earth?", options: ["Atlantic","Indian","Arctic","Pacific"], answer: "Pacific" },
    { section: "GK", question: "Who invented the telephone?", options: ["Alexander Graham Bell","Thomas Edison","Nikola Tesla","Guglielmo Marconi"], answer: "Alexander Graham Bell" },
    { section: "GK", question: "Mount Everest is located in which country?", options: ["India","Nepal","China","Bhutan"], answer: "Nepal" },
  ];

  const selectOption = (opt) => {
    if (!showAnswer) {
      setSelected(opt);
      setShowAnswer(true);
      if (opt === questions[currentQ].answer) setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    setSelected("");
    setShowAnswer(false);
    if (currentQ + 1 < questions.length) {
      setCurrentQ(currentQ + 1);
    } else {
      setPage("result");
    }
  };

  const restartQuiz = () => {
    setPage("home");
    setCurrentQ(0);
    setScore(0);
    setSelected("");
    setShowAnswer(false);
  };

  // ---------------- RENDER ----------------
  if (page === "home") {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500">
        <div className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-sm">
          <h1 className="text-3xl font-bold mb-4 text-purple-600">QuizQuest</h1>
          <p className="mb-6 text-gray-700">Sharpen your knowledge, test your mind!</p>
          <img className="w-32 mx-auto mb-6" src="https://cdn-icons-png.flaticon.com/512/3062/3062634.png" alt="Quiz" />
          <button
            className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition"
            onClick={() => setPage("quiz")}
          >
            Start Quiz
          </button>
        </div>
      </div>
    );
  }

  if (page === "quiz") {
    const currentQuestion = questions[currentQ];
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500">
        <div className="bg-white p-8 rounded-2xl shadow-xl max-w-lg w-full">
          <div className="mb-2">
            <span className="text-sm font-semibold px-3 py-1 bg-gray-200 text-gray-700 rounded-full">
              {currentQuestion.section}
            </span>
          </div>
          <h2 className="text-xl font-semibold mb-2 text-gray-800">
            Question {currentQ + 1} / {questions.length}
          </h2>
          <p className="text-gray-700 mb-6">{currentQuestion.question}</p>
          <div className="grid gap-4 mb-6">
            {currentQuestion.options.map((opt, i) => {
              let baseClass = "px-4 py-2 rounded-lg border transition cursor-pointer";
              if (showAnswer) {
                if (opt === currentQuestion.answer) {
                  baseClass += " bg-green-500 text-white border-green-500";
                } else if (opt === selected) {
                  baseClass += " bg-red-500 text-white border-red-500";
                } else {
                  baseClass += " bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed";
                }
              } else {
                baseClass += selected === opt ? " bg-purple-600 text-white border-purple-600" : " bg-white text-gray-800 border-gray-300 hover:bg-gray-100";
              }
              return (
                <button
                  key={i}
                  className={baseClass}
                  onClick={() => selectOption(opt)}
                  disabled={showAnswer}
                >
                  {opt}
                </button>
              );
            })}
          </div>
          {showAnswer && (
            <button
              className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition"
              onClick={nextQuestion}
            >
              Next
            </button>
          )}
        </div>
      </div>
    );
  }

  if (page === "result") {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-yellow-400 to-red-400">
        <div className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-sm">
          <h2 className="text-2xl font-bold mb-4 text-green-600">Quiz Finished 🎉</h2>
          <p className="text-gray-700 mb-6 text-lg">Your Score: {score} / {questions.length}</p>
          <button
            className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition"
            onClick={restartQuiz}
          >
            Restart Quiz
          </button>
        </div>
      </div>
    );
  }
}